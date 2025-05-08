import {verify} from "argon2";
import {Injectable, UnauthorizedException} from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import {SignInInput} from "./dto/signin.input";
import {JwtService} from "@nestjs/jwt";
import {AuthJwtPayload} from "./types/auth-jwtPayload";
import {User} from "../user/entities/user.entity";

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwtService: JwtService) {
    }

    async validateLocalUser({email, password}: SignInInput) {

        const user = await this.prisma.user.findUnique(
            {
                where: {
                    email
                }
            }
        )

        if (!user) throw new UnauthorizedException("User not found")

        const verifiedPassword = await verify(user.password as string, password)

        if (!verifiedPassword) throw new UnauthorizedException("Wrong password")

        return user
    }

    async generateToken(userId: number) {
        const payload: AuthJwtPayload = {sub: userId}
        return await this.jwtService.signAsync(payload)
    }

    async login({id, firstName, lastName, email}: User) {
        const accessToken = await this.generateToken(id)

        return {
            id,
            email,
            firstName,
            lastName,
            accessToken
        }
    }

    async validateJwtUser(userId: number) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: userId
            }
        })

        if (!user) throw new UnauthorizedException("User not found")

        return {id: user.id}
    }
}

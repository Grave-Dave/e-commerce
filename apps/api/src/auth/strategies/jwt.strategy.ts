import {ExtractJwt, Strategy} from "passport-jwt"
import {PassportStrategy} from "@nestjs/passport";
import {ConfigService} from "@nestjs/config";
import {Injectable} from "@nestjs/common";
import {AuthService} from "../auth.service";
import {AuthJwtPayload} from "../types/auth-jwtPayload";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private configService: ConfigService,
        private authService: AuthService
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: configService.get<string>("JWT_SECRET") as string,
            ignoreExpiration: false,
        });
    }

    validate(payload: AuthJwtPayload) {
        const userId = payload.sub;
        return this.authService.validateJwtUser(userId)
    }
}

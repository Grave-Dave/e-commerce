import {Response} from "express";
import {Controller, Get, Request, Res, UseGuards} from '@nestjs/common';
import {GoogleAuthGuard} from "./guards/google-auth/google-auth.guard";
import {AuthService} from "./auth.service";
import {ConfigService} from "@nestjs/config";
import {JwtAuthGuard} from "./guards/jwt-auth/jwt-auth.guard";

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private configService: ConfigService
    ) {
    }

    @UseGuards(GoogleAuthGuard)
    @Get("google/login")
    googleLogin() {
    }

    @UseGuards(GoogleAuthGuard)
    @Get("google/callback")
    async googleCallback(@Request() req, @Res() res: Response) {
        const userData = await this.authService.login(req.user)

        res.redirect(
            `${this.configService.get<string>('APP_URL')}/api/auth/google/callback?userId=${userData.id}&firstName=${userData.firstName}&lastName=${userData.lastName}&avatar=${userData.avatar}&accessToken=${userData.accessToken}`,
        );
    }

    @UseGuards(JwtAuthGuard)
    @Get('verify-token')
    verify() {
        return 'ok'
    }
}


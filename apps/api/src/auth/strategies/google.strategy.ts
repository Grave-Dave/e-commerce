import {Strategy, VerifyCallback, StrategyOptionsWithRequest} from "passport-google-oauth20";
import {PassportStrategy} from "@nestjs/passport";
import {ConfigService} from "@nestjs/config";
import {Injectable} from "@nestjs/common";
import {AuthService} from "../auth.service";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
    constructor(
        private configService: ConfigService,
        private authService: AuthService
    ) {
        super({
            clientID: configService.get<string>('GOOGLE_CLIENT_ID'),
            clientSecret: configService.get<string>('GOOGLE_CLIENT_SECRET'),
            callbackURL: configService.get<string>('GOOGLE_CALLBACK_URL'),
            scope: ['email', 'profile'],
        } as StrategyOptionsWithRequest);
    }

    async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback) {
        const user = await this.authService.validateGoogleUser({
            email: profile.emails[0].value,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            avatar:profile.photos[0].value,
            phone: "",
            address: "",
            password: "",
        })

        done(null, user)
    }
}

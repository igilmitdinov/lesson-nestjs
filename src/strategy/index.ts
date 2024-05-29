import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStategy extends PassportStrategy(Strategy) {
    constructor(private readonly configeService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configeService.get('secret_jwt')
        });
    }

    async validate (payload: any) {
        return { 
            ...payload.user
        }
    }
}
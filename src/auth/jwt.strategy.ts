import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { PassportStrategy } from "@nestjs/passport";
import { Model } from "mongoose";
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from "../modules/user/models/user.model";

@Injectable()

export class JwtStrategy extends PassportStrategy(Strategy)
{
    constructor
    (
        @InjectModel(User.name)
        private userModel: Model<User>
    )
    {
        super
        (
            {
                jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
                secretOrKey: 'codenestwithMenna'
            }
        )
    }

    async validate(payload)
    {
        // console.log('JWT_PAYLOAD:' , payload);

        const {id} = payload;

        const user = await this.userModel.findById(id);

        if(!user)
        {
            throw new UnauthorizedException('LOGIN FIRST TO ACCESS THIS ENDPOINT.')
        }
        return user

    }
    
}

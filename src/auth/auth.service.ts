import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../modules/user/models/user.model';
import { Model } from 'mongoose';

import * as bcrypt from 'bcryptjs'
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './auth_dto/signup.dto';
import { LoginDto } from './auth_dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private readonly userModel: Model<User>,
        private jwtService: JwtService
    )
    {

    }

    async signUp(signUpDto: SignUpDto): Promise<{token : string}>
    {
        const { firstName , lastName, email , password , phoneNumber, age } = signUpDto 

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await this.userModel.create(
            {
                firstName, 
                lastName,
                email,
                password: hashedPassword,
                phoneNumber,
                age
            }

        )
        //SIGN FUNC HELP US TO GENERATE JWT TOKEN
        const token = this.jwtService.sign({id: user._id})
        return {token}
    }
    async login (loginDto: LoginDto): Promise<{ token : string}>
    {
        const{email, password} = loginDto;

        const user = await this.userModel.findOne({email})

        if(!user)
        {
            throw new UnauthorizedException ('INVALID EMAIL OR PASSWORD')
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password)

        if(!isPasswordMatched)
        {
            throw new UnauthorizedException('INVALID EMAIL OR PASSWORD')
        }
        
        const token = this.jwtService.sign({id: user._id})
        return {token}

    }
}

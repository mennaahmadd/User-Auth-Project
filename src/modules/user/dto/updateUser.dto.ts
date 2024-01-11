import { IsString, IsEmail, IsNotEmpty, IsNumber, Length, IsNumberString } from 'class-validator';
import { CreateUserDto } from './createUser.dto';
import { OmitType, PartialType } from '@nestjs/mapped-types';

export class updateUserDto extends PartialType(OmitType(CreateUserDto, ['firstName', 'lastName', 'age'] ))
{
    email: string;
    password: string;
    phoneNumber: string;
}



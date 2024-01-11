import { IsEmail, IsNotEmpty, IsString, Length} from 'class-validator';

export class LoginDto {

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 25, { message: 'Password must be between 6 and 25 characters' })
  password: string;

}
import { IsEmail, IsNotEmpty, IsString, IsNumberString, IsNumber, Length} from 'class-validator';

export class SignUpDto {

  @IsNotEmpty()
  @IsString()
  @Length(5, 25, { message: 'First name must be between 5 and 25 characters' })
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 25, { message: 'Last name must be between 5 and 25 characters' })
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 25, { message: 'Password must be between 6 and 25 characters' })
  password: string;

  @IsNotEmpty()
  @IsString()
  phoneNumber: string;

  @IsNumber()
  @IsNotEmpty()
  age: number;

}
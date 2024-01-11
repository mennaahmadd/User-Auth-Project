import { Body, Controller, Post , Get} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './auth_dto/signup.dto';
import { LoginDto } from './auth_dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor( private authService: AuthService)
    {}
        @Post('/signUp')
        signUp(@Body() signUpDto: SignUpDto): Promise<{token : string}>
        {
            return this.authService.signUp(signUpDto);
        }

        @Get('/login')
        login(@Body() loginDto: LoginDto): Promise<{token : string}>
        {
            return this.authService.login(loginDto);
        }


}

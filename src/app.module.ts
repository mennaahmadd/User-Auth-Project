import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './auth/auth.module';
import { UserController } from './modules/user/user.controller';
// import { UserService } from './modules/user/user.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/zumraNestProject'), UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

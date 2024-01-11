import { Module } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User, UserSchema } from './models/user.model';
import { CreateUserDto } from './dto/createUser.dto';
// import { AuthModule } from 'src/auth/auth.module';
import { AuthModule } from '../../auth/auth.module'
// import { DatabaseConnection } from 'mongodb://localhost:27017/zumraNestProject';



@Module({
  imports: [
    AuthModule,
    // MongooseModule.forRoot('mongodb://localhost:27017/zumraNestProject'),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    // MongooseModule.forRootAsync({
    //   useClass: DatabaseConnection, 
    // }),
],
  controllers: [UserController],
  providers: [UserService, CreateUserDto],
  exports: [UserService]
})
export class UserModule {}
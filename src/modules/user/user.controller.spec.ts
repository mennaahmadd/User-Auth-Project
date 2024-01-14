import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
// import { CreateUserDto } from './dto/createUser.dto';
import { User, UserSchema } from './models/user.model';
// import { UserModule } from './user.module';
// import { AppService } from 'src/app.service';
import { MongooseModule } from '@nestjs/mongoose';


describe('UserController', () => {
  let controller: UserController;

  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
      imports: [MongooseModule.forRoot('mongodb://localhost:27017/zumraNestProject'), MongooseModule.forFeature([{ name: User.name, schema: UserSchema}])]
    }).compile();

    controller = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  // it('should be defined', () => {
  //   expect(controller).toBeDefined();
  // });

  // describe('create', () => {
  //   it('should create a user', async () => {
  //     const createUserDto: CreateUserDto = {
  //       firstName: "Menna",
  //       lastName: "abdelhamid",
  //       email: "menna22@gmail.com",
  //       password: "1234567",
  //       phoneNumber: "01000000",
  //       age: 23
  //   }
  //     const createdUser: any = { //REUSLT EXPECTED 
  //         firstName: 'Menna',
  //         lastName: 'abdelhamid',
  //         email: 'menna22@gmail.com',
  //         password: '1234567',
  //         phoneNumber: '01000000',
  //         age: 23,
  //         createdAt: '2023-12-25T01:44:20.028Z',
  //         updatedAt: '2023-12-25T01:44:20.028Z',
  //         __v: 0
  //     };
  //     jest.spyOn(userService, 'create').mockResolvedValue(createdUser);
  //     const result: User = await controller.create(createUserDto);
  //     expect(userService.create).toHaveBeenCalledWith(createUserDto);
  //     expect(result).toEqual(createdUser);
  //   });
  // });

  //EZAY AMA BADKHL DATA GHALAT BY2OLY PASSED
  describe('findAll', () => {
    it('should return an array of users', async () => {
      const users: User[] = [
        {
          firstName: 'menna',
          lastName: 'abdelhamid',
          email: 'menna@gmail.com',
          password: '0120020202',
          phoneNumber: '010',
          age: 23,
        },
        {
          firstName: '24',
          lastName: 'abdelhamid',
          email: 'menna@gmail',
          password: '',
          phoneNumber: '0100000',
          age: 23,
        },
      ];

      jest.spyOn(userService, 'findAll').mockResolvedValue(users);
      const result = await controller.findAll();
      expect(result).toEqual(users);
    });
  });

});

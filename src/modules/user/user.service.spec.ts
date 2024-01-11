import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../user/models/user.model';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';


describe('UserService', () => 
{
  let userService: UserService;
  let userModel: Model<User>;

  const mockUserService = 
  {
    create: jest.fn()
  }

  beforeEach(async () => 
  {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ UserService, {
        provide: getModelToken(User.name),
        useValue: mockUserService,
      }]}).compile();
  userService = module.get<UserService>(UserService);
  userModel = module.get<Model<User>>(getModelToken(User.name));
  })

  // describe('create', ()=>{
  //   it('should create and return a user', async()=>{
  //     const newUser = {
  //       firstName: 'John',
  //       lastName: 'Doe',
  //       email: 'john.doe@example.com',
  //       password: 'password123',
  //       phoneNumber: '1234567890',
  //       age: 25,
  //     };
  //     jest
  //       .spyOn(userModel, 'create')
  //       .mockImplementationOnce(() => Promise.resolve(mockUser));
  //     const result = await userService.create(
  //       newUser as CreateUserDto,
  //     );
  //     expect(result).toEqual(mockUser);
  //   })
  // })
});


  // const mockUserModel = {
  //   create: jest.fn(),
  // };
  // beforeEach(async () => {
  //   const module: TestingModule = await Test.createTestingModule({
  //     providers: [
  //       UserService,
  //       {
  //         provide: getModelToken(User.name),
  //         useValue: {
  //           model: mockUserModel,
  //         },
  //       },
  //       {
  //         provide: UserService,
  //         useValue: {
  //           findByEmail: jest.fn(),
  //           findById: jest.fn(),
  //           create: jest.fn(),
  //         },
  //       }
  //     ],
  //   }).compile();
  //   userService = module.get<UserService>(UserService);
  //   userModel = module.get<Model<User>>(getModelToken(User.name));
  // });
  // it('should create a user', async () => {
  //   const user: User = {
  //     firstName: 'John',
  //     lastName: 'Doe',
  //     email: 'john.doe@example.com',
  //     password: 'password123',
  //     phoneNumber: '1234567890',
  //     age: 25,
  //   };
  //   jest.spyOn(userModel, 'create').mockImplementationOnce(()=>Promise.resolve(mockUser));
  //   // const newUserDocument: UserDocument = new userModel(user);
  //   // jest.spyOn(newUserDocument, 'save').mockResolvedValue(newUserDocument);
  //   // mockUserModel.create.mockReturnValue(newUserDocument);
  //   // // jest.spyOn(userService, 'create').mockResolvedValue(user);
  //   // const result = await userService.create(user);
  //   // expect(mockUserModel.create).toHaveBeenCalledWith(user);
  //   // expect(result).toEqual(newUserDocument);
  //   // // expect(result).toEqual({...user, _id: new Types.ObjectId('1222')});
  // });
// });










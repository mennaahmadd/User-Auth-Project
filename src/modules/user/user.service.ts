import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './models/user.model';
import { updateUserDto } from './dto/updateUser.dto'; 

@Injectable()
export class UserService {
  findByUsername(username: string) {
      throw new Error('Method not implemented.');
  }
  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}


  // async create(user: User): Promise<User> 
  // {
  //   const newUser = new this.userModel(user);
  //   return newUser.save();
  // }

  async create(user: User): Promise<User> 
  {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findById(id: string): Promise<User | null> {
    return this.userModel.findById(id).exec();
  }
  
  async delete(id: string): Promise<any>
  {
    return this.userModel.findByIdAndDelete(id).exec();
  }

  async update(id: string, updateUserDto: updateUserDto): Promise<User> 
  {
    const existingUser = await this.userModel.findById(id).exec();

    if (!existingUser) 
    {
      throw new Error('User not found');
    }
    existingUser.email = updateUserDto.email;
    existingUser.password = updateUserDto.password;
    existingUser.phoneNumber = updateUserDto.phoneNumber;
    return existingUser.save();
  }
}
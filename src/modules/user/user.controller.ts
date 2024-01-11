import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './models/user.model';
import { CreateUserDto } from './dto/createUser.dto'; 
import { updateUserDto } from './dto/updateUser.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('User Module')
@ApiBearerAuth()
@Controller('users')
// @UseGuards(AuthGuard('jwt'))
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Post('create')
  // create(@Body() user: User): Promise<User> {
  //   return this.userService.create(user);
  // }

  @Post('create')
  @ApiOperation({summary: 'Create new record'})
  @ApiBody({
    schema:{
      type: 'object',
      properties:{
        firstName:{
          type: 'string',
          example: 'menna',
          description: 'this is user first name'
        },
        lastName:{
          type: 'string',
          example: 'abdelhamid',
          description: 'this is user last name'
        },
        email:{
          type: 'string',
          example: 'menna@gmail.com',
          description: 'this is user email'
        },
        password:{
          type: 'string',
          example: 'menna2210',
          description: 'this is user password'
        },
        phoneNumber:{
          type: 'string',
          example: '+201033',
          description: 'this is user mobile number'
        },
        age:{
          type: 'integer',
          example: 23,
          description: 'this is user age'
        }

      }
    }
  })
  @ApiResponse({
    status: 201,
    description: 'saved...'
  })
  @ApiResponse({
    status: 403,
    description: 'forbidden'
  })
  //IT WILL PROTECT OUR ROUTE
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() createUserDto: CreateUserDto): Promise<User> 
  {
    return this.userService.create(createUserDto);
  }

  @Get('all')
  @ApiOperation({summary: 'Create user api'})
  @ApiResponse({
    status: 200,
    description: 'done'
  })
  @ApiResponse({
    status:403,
    description: 'forbidden'
  })
  @ApiResponse({
    status:500,
    description: 'Internal server error'
  })
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<User | null> {
    return this.userService.findById(id);
  }

  @Delete('delete/:id')
  delete(@Param('id') id: string): Promise<User | null> {
    return this.userService.delete(id);
  }

  @Put('update/:id') 

  async update(@Param('id') id: string, @Body() updateUserDto: updateUserDto): Promise<User> 
  { 
    return this.userService.update(id, updateUserDto);
  }

}


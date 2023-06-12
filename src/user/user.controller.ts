import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto, CreateUserDto, UpdateUserDto } from '../auth/dto/user.dto';
import { User } from '../auth/entities/user.entity';

@Controller('user')
export class UserController {
  CreateuserService: any;
  constructor(private readonly userService: UserService) {}
   
  //create user
  @Post('/createUser')
  async create(@Body() userDTO: CreateUserDto){
    const user = new User();
  user.email = CreateUserDto.email;
  user.username = CreateUserDto.username;
  user.password = CreateUserDto.password;
  return await this.CreateuserService.create(user);
  }

  //get users
  @Get('/getUsers')
  async getUsers(){
  return this.userService.getusers();
  }
  
  //update users
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  return this.userService.update(+id, updateUserDto);
  }

  //remove users
  @Delete(':id')
  remove(@Param('id') id: string) {
  return this.userService.delete(+id);
  }
}


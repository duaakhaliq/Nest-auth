import { PrimaryGeneratedColumn, Column  } from "typeorm";
import { PartialType } from '@nestjs/mapped-types';

export class UserDto {  
    @IsNotEmpty()  @IsEmail() email: string;
    @IsNotEmpty()  username: string;

}

export class CreateUserDto {  
    @IsNotEmpty()  username: string;
    @IsNotEmpty()  password: string;
    @IsNotEmpty()  @IsEmail()  email: string;
  static email: string;
  static username: string;
  static password: string;
}

export class LoginUserDto {  
    @IsNotEmpty()  readonly username: string;
    @IsNotEmpty()  readonly password: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
// CreateUserDto class with properties for user registration input, such as username, email, and password.

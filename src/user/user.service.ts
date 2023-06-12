import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto, CreateUserDto, UpdateUserDto } from '../auth/dto/user.dto';
import { User } from '../auth/entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

async findOne(options?: object): Promise<UserDto> {
    const user =  await this.userRepository.findOne(options);    
    return new UserDto();  
}
    async create( user: User) {
    return await this.userRepository.save(user);
  }
// async create(userDto: CreateUserDto): Promise<UserDto> {    
//     const { username, password, email } = userDto;
    
//     // check if the user exists in the db    
//     const userInDb = await this.userRepository.findOne({ 
//         where: { username } 
//     });
//     if (userInDb) {
//         throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);    
//     }
    
//     const user: User = await this.userRepository.create({ username, password, email, });
//     await this.userRepository.save(user);
//     return toUserDto(user);  
// }
 
  async getusers() {
    return await this.userRepository.find(); //`This action returns all user`;
  }

  
   async update(id: number, user: UpdateUserDto) {
      return this.userRepository.update(id, user) //`This action updates a #${id} user`;
    }


    async delete (id: number): Promise<void> {
    await this.userRepository.delete(id); //`This action removes a #${id} user`;
    }
  
//     async findByLogin({ username, password }: LoginUserDto): Promise<UserDto> {    
//     const user = await this.userRepo.findOne({ where: { username } });
    
//     if (!user) {
//         throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);    
//     }
    
//     // compare passwords    
//     const areEqual = await comparePasswords(user.password, password);
    
//     if (!areEqual) {
//         throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);    
//     }
    
//     return toUserDto(user);  
// }
//   async findByPayload({ username }: any): Promise<UserDto> {
//     return await this.findOne({ 
//         where:  { username } });  
// }
}
import { DataSource, Repository } from 'typeorm';
import { User } from '../auth/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../auth/dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserRepository extends Repository<User> {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {
        super(userRepository.target, userRepository.manager, userRepository.queryRunner);
    }

    async saveUser(user: User) {
        return await this.userRepository.save(user);
    }
    
    async getusers() {
        return await this.userRepository.find(); //`This action returns all user`;
  // could also be this.findOneBy({ email });, but depending on your IDE/TS settings, could warn that userRepository is not used though. Up to you to use either of the 2 methods
        
  }
}
    
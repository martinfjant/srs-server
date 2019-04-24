import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserInput } from './user.input';

/* TODO
[x]Find all
[x]Find by id
[x]Add user
[]Edit user
[]Delete user
*/

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return await this.userRepository.findOne(id);
  }

  async add(newUser: UserInput): Promise<User> {
    // const user = await this.userRepository.create();

    const user = new User();

    user.name = newUser.name;
    user.email = newUser.email;
    user.password = newUser.password;

    const res = await this.userRepository.save(user);
    return res;
  }

  async edit(id: number, userData: UserInput): Promise<User> {
    const user = await this.userRepository.findOne(id);
    this.userRepository.merge(user, userData);
    return await this.userRepository.save(user);
  }

  async delete(id: number): Promise<any> {
    return await this.userRepository.delete(id);
  }
}

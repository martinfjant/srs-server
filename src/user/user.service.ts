import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserInput } from './user.input';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(object?: object): Promise<User[]> {
    return await this.userRepository.find(object);
  }

  async findOne(id: number): Promise<User> {
    return await this.userRepository.findOne(id);
  }

  async findByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({ email });
  }

  async add(userData: UserInput): Promise<User> {
    const user = this.userRepository.create(userData);
    return await this.userRepository.save(user);
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

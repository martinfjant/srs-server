import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UserInput } from './user.input';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser(): Promise<User[]> {
    return this.userService.findAll();
  }
  @Get(':id')
  getUserById(@Param('id') id): Promise<User> {
    return this.userService.findOne(id);
  }
}

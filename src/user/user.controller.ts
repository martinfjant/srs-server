import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UserInput } from './user.input';
import { AuthGuard } from '@nestjs/passport';
import { PassportModule } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  getUser(): Promise<User[]> {
    return this.userService.findAll();
  }
  @Get(':id')
  getUserById(@Param('id') id): Promise<User> {
    return this.userService.findOne(id);
  }
}

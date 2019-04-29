import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { async } from 'rxjs/internal/scheduler/async';
import { AuthInput } from './auth.input';

@Controller('auth')
export class AuthController {
  constructor(private readonly authservice: AuthService) {}

  @Post('/')
  async createToken(@Body() body: AuthInput): Promise<any> {
    return await this.authservice.logIn(body);
  }
}

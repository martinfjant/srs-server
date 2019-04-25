import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { async } from 'rxjs/internal/scheduler/async';

@Controller('auth')
export class AuthController {
  constructor(private readonly authservice: AuthService) {}

  @Get('token')
  async createToken(): Promise<any> {
    return await this.authservice.signIn();
  }
}

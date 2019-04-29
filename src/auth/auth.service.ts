import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import * as argon2 from 'argon2';
import { AuthInput } from './auth.input';
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async logIn(args: AuthInput): Promise<string> {
    const user = await this.userService.findByEmail(args.email);
    if (await argon2.verify(user.password, args.password)) {
      const jwt: JwtPayload = {
        email: user.email,
        role: user.role,
      };
      return await this.jwtService.sign(jwt);
    } else {
      throw new UnauthorizedException();
    }
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    return await this.userService.findByEmail(payload.email);
  }
}

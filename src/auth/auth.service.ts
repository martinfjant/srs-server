import {
  Injectable,
  UnauthorizedException,
  forwardRef,
  Inject,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import * as argon2 from 'argon2';
import { AuthInput } from './auth.input';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async logIn(args: AuthInput): Promise<string> {
    const { email, password } = await args;
    const user = await this.userService.findByEmail(email);
    if (await argon2.verify(user.password, password)) {
      const jwt: JwtPayload = {
        email: user.email,
        role: user.role,
      };
      return await this.jwtService.sign(jwt);
    } else {
      throw new UnauthorizedException();
    }
  }

  async validateUser(payload: any): Promise<any> {
    return await this.userService.findByEmail(payload.email);
  }
  async getUser(token: string): Promise<any> {
    const payload = await this.jwtService.decode(token);
    return await this.validateUser(payload);
  }
}

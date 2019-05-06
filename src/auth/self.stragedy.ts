import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class SelfStrategy extends PassportStrategy(Strategy, 'self') {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validateSelf(payload: JwtPayload, uid: number) {
    /* FIX THIS */
    const user = await this.authService.validateUser(payload);
    if (!user) {
      throw new UnauthorizedException();
    } else if (payload.email !== user.email) {
      throw new UnauthorizedException();
    }
    return user;
  }
}

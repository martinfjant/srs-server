import { Module, forwardRef } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.stragedy';
import { AuthController } from './auth.controller';
import { AdminStrategy } from './admin.stragedy';
import { AuthResolver } from './auth.resolver';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secretOrPrivateKey: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: 3600,
      },
    }),
    forwardRef(() => UserModule),
  ],
  providers: [AuthService, JwtStrategy, AdminStrategy, AuthResolver],
  exports: [PassportModule, AuthService],
  controllers: [AuthController],
})
export class AuthModule {}

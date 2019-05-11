import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { UserResolver } from './user.resolver';
import { CardModule } from 'src/card/card.module';
import { PassportModule } from '@nestjs/passport';
import { DateScalar } from 'src/utils/DateScalar';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    CardModule,
    PassportModule,
    DateScalar,
  ],
  providers: [UserService, UserResolver, DateScalar],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { UserResolver } from './user.resolver';
import { CardService } from 'src/card/card.service';
import { CardModule } from 'src/card/card.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [TypeOrmModule.forFeature([User]), CardModule, PassportModule],
  providers: [UserService, UserResolver, CardService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}

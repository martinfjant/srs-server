import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { Connection } from 'typeorm';
import { CardModule } from './card/card.module';
import { RepetitionModule } from './repetition/repetition.module';
import { DateScalar } from './utils/DateScalar';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({ autoSchemaFile: 'schema.gql' }),
    UserModule,
    CardModule,
    RepetitionModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, DateScalar, AuthService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}

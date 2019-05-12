import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to srs-server. Please consume the API using GraphQL';
  }
}

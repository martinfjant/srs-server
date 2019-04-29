import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UserService } from 'src/user/user.service';
import { AuthInput } from './auth.input';
import { AuthService } from './auth.service';
import { Auth } from './auth.entity';

@Resolver(of => Auth)
export class AuthResolver {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Mutation(() => Auth)
  async auth(@Args('authData') authData: AuthInput): Promise<Auth> {
    const auth = new Auth();
    auth.token = await this.authService.logIn(authData);
    console.log(auth);
    return auth;
  }
}

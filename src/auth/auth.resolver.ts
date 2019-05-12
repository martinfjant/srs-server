import { Resolver, Mutation, Args, Query, Context } from '@nestjs/graphql';
import { UserService } from 'src/user/user.service';
import { AuthInput } from './auth.input';
import { AuthService } from './auth.service';
import { Auth } from './auth.entity';
import getToken from 'src/utils/getToken';
import { User } from 'src/user/user.entity';

@Resolver(of => Auth)
export class AuthResolver {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Query(() => User)
  async me(@Context() ctx: any): Promise<User> {
    const token = getToken(ctx);
    const user = await this.authService.getUser(token);
    return user;
  }
  @Mutation(() => Auth)
  async auth(@Args('authData') authData: AuthInput): Promise<Auth> {
    const auth = new Auth();
    auth.token = await this.authService.logIn(authData);
    return auth;
  }
}

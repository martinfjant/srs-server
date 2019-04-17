import { Resolver, Query, ResolveProperty, Parent } from '@nestjs/graphql';
import { User } from './user.entity';
import { Card } from '../card/card.entity';
import { UserService } from './user.service';
import { CardService } from 'src/card/card.service';

@Resolver(of => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly cardService: CardService,
  ) {}
  @Query(() => [User])
  async users(): Promise<User[]> {
    const test = await this.userService.findAll();
    return test;
  }
  @ResolveProperty('cards')
  async cards(@Parent() user): Promise<Card[]> {
    const { id } = user;
    return await this.cardService.findAll();
  }
}

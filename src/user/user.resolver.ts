import {
  Resolver,
  Query,
  ResolveProperty,
  Parent,
  Args,
  Mutation,
} from '@nestjs/graphql';
import { Int } from 'type-graphql';
import { User } from './user.entity';
import { Card } from '../card/card.entity';
import { UserService } from './user.service';
import { CardService } from 'src/card/card.service';
import { UserInput } from './user.input';
import { GqlAuthGuard } from 'src/auth/gql-auth-guard';
import { UseGuards } from '@nestjs/common';

@Resolver(of => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly cardService: CardService,
  ) {}
  @Query(() => User)
  @UseGuards(GqlAuthGuard)
  async user(@Args({ name: 'id', type: () => Int }) id: number): Promise<User> {
    return await this.userService.findOne(id);
  }

  @Mutation(() => User)
  @UseGuards(GqlAuthGuard)
  async addUser(@Args('userData') userData: UserInput) {
    return await this.userService.add(userData);
  }

  @Mutation(() => User)
  @UseGuards(GqlAuthGuard)
  async editUser(
    @Args('userData') userData: UserInput,
    @Args('id') id: number,
  ) {
    return await this.userService.edit(id, userData);
  }

  @Mutation(() => User)
  @UseGuards(GqlAuthGuard)
  async deleteUser(@Args('id') id: number) {
    return await this.userService.delete(id);
  }

  @ResolveProperty('cards')
  async cards(@Parent() user): Promise<Card[]> {
    const { id } = user;
    return await this.cardService.findAll({ user: id });
  }
}

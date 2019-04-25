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
import { Any } from 'typeorm';
import { UserInput } from './user.input';

@Resolver(of => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly cardService: CardService,
  ) {}
  @Query(() => User)
  async user(@Args({ name: 'id', type: () => Int }) id: number): Promise<User> {
    return await this.userService.findOne(id);
  }

  @Mutation(() => User)
  async addUser(@Args('userData') userData: UserInput) {
    return await this.userService.add(userData);
  }

  @Mutation(() => User)
  async editUser(
    @Args('userData') userData: UserInput,
    @Args('id') id: number,
  ) {
    return await this.userService.edit(id, userData);
  }

  @Mutation(() => User)
  async deleteUser(@Args('id') id: number) {
    return await this.userService.delete(id);
  }

  @ResolveProperty('cards')
  async cards(@Parent() user): Promise<Card[]> {
    const { id } = user;
    return await this.cardService.findAll({ user: id });
  }
}

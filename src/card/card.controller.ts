import { Controller, Get, Param } from '@nestjs/common';
import { CardService } from './card.service';

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}
  @Get(':userId')
  getCardsByUserId(@Param('userId') userId: number) {
    const test = this.cardService.scheduled(userId);
    return test;
  }
}

/*
 @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  getUserById(@Param('id') id): Promise<User> {
    return this.userService.findOne(id);
  }
*/

import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { CardService } from './card.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}
  @Get(':userId')
  @UseGuards(AuthGuard('jwt'))
  getCardsByUserId(@Param('userId') userId: number) {
    const test = this.cardService.scheduled(userId);
    return test;
  }
}

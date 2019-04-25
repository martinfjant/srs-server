import * as Faker from 'faker';
import { define } from 'typeorm-seeding';

import { Deck } from 'src/card/deck.entity';

define(Deck, (faker: typeof Faker, settings: { role: string }) => {
  const answer = faker.random.number({ min: 1, max: 5 });
  const deck = new Deck();
  deck.name = 'test';
  return deck;
});

import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { Card } from 'src/card/card.entity';

define(Card, (faker: typeof Faker, settings: { role: string }) => {
  const front = faker.commerce.productName() + '?';
  const back = faker.commerce.productName();
  const scheduled = faker.date.future();
  const efactor = 2;
  const learned = faker.random.boolean();

  const card = new Card();
  card.front = front;
  card.back = back;
  card.scheduled = scheduled;
  card.efactor = efactor;
  card.learned = learned;

  return card;
});

import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { Card } from 'src/card/card.entity';

define(Card, (faker: typeof Faker, settings: { role: string }) => {
  const front = faker.lorem.sentence();
  const back = faker.commerce.productName();
  const foo = faker.random.number(4);
  const scheduled = faker.date.soon(foo);

  const card = new Card();
  card.front = front;
  card.back = back;
  card.scheduled = scheduled;

  return card;
});

import * as Faker from 'faker';
import { define } from 'typeorm-seeding';

import { Repetition } from 'src/repetition/repetition.entity';

define(Repetition, (faker: typeof Faker, settings: { role: string }) => {
  const answer = faker.random.number({ min: 1, max: 5 });
  const repetition = new Repetition();
  repetition.answer = answer;
  return repetition;
});

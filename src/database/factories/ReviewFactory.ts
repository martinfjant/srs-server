import * as Faker from 'faker';
import { define } from 'typeorm-seeding';

import { Review } from 'src/review/review.entity';

define(Review, (faker: typeof Faker, settings: { role: string }) => {
  const answer = faker.random.number({ min: 1, max: 5 });
  const review = new Review();
  review.answer = answer;
  return review;
});

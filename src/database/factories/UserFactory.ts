import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { User } from 'src/user/user.entity';

define(User, (faker: typeof Faker, settings: { role: string }) => {
  const gender = faker.random.number(1);
  const firstName = faker.name.firstName(gender);
  const lastName = faker.name.lastName(gender);
  const email = faker.internet.email(firstName, lastName);
  const date = faker.date.past();
  const user = new User();
  user.email = email;
  user.name = firstName + ' ' + lastName;
  user.password = '1234';
  user.createdDate = date;
  return user;
});

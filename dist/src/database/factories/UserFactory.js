"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_seeding_1 = require("typeorm-seeding");
const user_entity_1 = require("src/user/user.entity");
typeorm_seeding_1.define(user_entity_1.User, (faker, settings) => {
    const gender = faker.random.number(1);
    const firstName = faker.name.firstName(gender);
    const lastName = faker.name.lastName(gender);
    const email = faker.internet.email(firstName, lastName);
    const date = faker.date.past();
    const user = new user_entity_1.User();
    user.email = email;
    user.name = firstName + ' ' + lastName;
    user.password = '1234';
    user.createdDate = date;
    return user;
});
//# sourceMappingURL=UserFactory.js.map
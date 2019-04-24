"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_seeding_1 = require("typeorm-seeding");
const card_entity_1 = require("src/card/card.entity");
typeorm_seeding_1.define(card_entity_1.Card, (faker, settings) => {
    const front = faker.commerce.productName() + '?';
    const back = faker.commerce.productName();
    const scheduled = faker.date.future();
    const efactor = 2;
    const learned = faker.random.boolean();
    const card = new card_entity_1.Card();
    card.front = front;
    card.back = back;
    card.scheduled = scheduled;
    card.efactor = efactor;
    card.learned = learned;
    return card;
});
//# sourceMappingURL=CardFactory.js.map
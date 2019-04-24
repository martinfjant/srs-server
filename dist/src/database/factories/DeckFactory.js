"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_seeding_1 = require("typeorm-seeding");
const deck_entity_1 = require("src/card/deck.entity");
typeorm_seeding_1.define(deck_entity_1.Deck, (faker, settings) => {
    const answer = faker.random.number({ min: 1, max: 5 });
    const deck = new deck_entity_1.Deck();
    deck.name = 'test';
    return deck;
});
//# sourceMappingURL=DeckFactory.js.map
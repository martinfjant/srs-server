"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_seeding_1 = require("typeorm-seeding");
const repetition_entity_1 = require("src/repetition/repetition.entity");
typeorm_seeding_1.define(repetition_entity_1.Repetition, (faker, settings) => {
    const answer = faker.random.number({ min: 1, max: 5 });
    const repetition = new repetition_entity_1.Repetition();
    repetition.answer = answer;
    return repetition;
});
//# sourceMappingURL=RepetitionFactory.js.map
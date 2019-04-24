"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_seeding_1 = require("typeorm-seeding");
const card_entity_1 = require("src/card/card.entity");
const user_entity_1 = require("src/user/user.entity");
class CreateCards {
    seed(factory, connection) {
        return __awaiter(this, void 0, void 0, function* () {
            const em = connection.createEntityManager();
            yield typeorm_seeding_1.times(10, (n) => __awaiter(this, void 0, void 0, function* () {
                const card = yield factory(card_entity_1.Card)().seed();
                const user = yield factory(user_entity_1.User)().make();
                user.cards = [card];
                return yield em.save(user);
            }));
        });
    }
}
exports.CreateCards = CreateCards;
//# sourceMappingURL=CreateCards.js.map
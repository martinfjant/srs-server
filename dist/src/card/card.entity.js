"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const user_entity_1 = require("src/user/user.entity");
const repetition_entity_1 = require("src/repetition/repetition.entity");
const type_graphql_1 = require("type-graphql");
const deck_entity_1 = require("./deck.entity");
let Card = class Card {
};
__decorate([
    type_graphql_1.Field(id => type_graphql_1.ID),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Card.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column({ length: 500 }),
    __metadata("design:type", String)
], Card.prototype, "front", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column({ length: 500 }),
    __metadata("design:type", String)
], Card.prototype, "back", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column({ default: () => 'NOW()' }),
    __metadata("design:type", Date)
], Card.prototype, "scheduled", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column({ default: 2 }),
    __metadata("design:type", Number)
], Card.prototype, "efactor", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column({ default: false }),
    __metadata("design:type", Boolean)
], Card.prototype, "learned", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Card.prototype, "createdDate", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Card.prototype, "updatedDate", void 0);
__decorate([
    type_graphql_1.Field(type => user_entity_1.User),
    typeorm_1.ManyToOne(type => user_entity_1.User, user => user.cards),
    __metadata("design:type", user_entity_1.User)
], Card.prototype, "user", void 0);
__decorate([
    type_graphql_1.Field(type => repetition_entity_1.Repetition),
    typeorm_1.OneToMany(type => repetition_entity_1.Repetition, repetition => repetition.card),
    __metadata("design:type", Array)
], Card.prototype, "repetitions", void 0);
__decorate([
    typeorm_1.ManyToMany(type => deck_entity_1.Deck),
    __metadata("design:type", Array)
], Card.prototype, "decks", void 0);
Card = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity()
], Card);
exports.Card = Card;
//# sourceMappingURL=card.entity.js.map
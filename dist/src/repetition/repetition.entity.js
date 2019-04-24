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
const card_entity_1 = require("src/card/card.entity");
const type_graphql_1 = require("type-graphql");
let Repetition = class Repetition {
};
__decorate([
    type_graphql_1.Field(id => type_graphql_1.ID),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Repetition.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Repetition.prototype, "answer", void 0);
__decorate([
    type_graphql_1.Field(type => card_entity_1.Card),
    typeorm_1.ManyToOne(type => card_entity_1.Card, card => card.id),
    __metadata("design:type", card_entity_1.Card)
], Repetition.prototype, "card", void 0);
Repetition = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity()
], Repetition);
exports.Repetition = Repetition;
//# sourceMappingURL=repetition.entity.js.map
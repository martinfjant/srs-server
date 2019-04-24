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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
const card_entity_1 = require("./card.entity");
const card_service_1 = require("./card.service");
const type_graphql_1 = require("type-graphql");
const card_input_1 = require("./card.input");
let CardResolver = class CardResolver {
    constructor(cardService) {
        this.cardService = cardService;
    }
    cards() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.cardService.findAll({});
        });
    }
    card(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.cardService.findOne(id);
        });
    }
    addCard(cardData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.cardService.add(cardData);
        });
    }
};
__decorate([
    graphql_1.Query(() => [card_entity_1.Card]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CardResolver.prototype, "cards", null);
__decorate([
    graphql_1.Query(() => card_entity_1.Card),
    __param(0, graphql_1.Args({ name: 'id', type: () => type_graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CardResolver.prototype, "card", null);
__decorate([
    graphql_1.Mutation(() => card_entity_1.Card),
    __param(0, graphql_1.Args('cardData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [card_input_1.CardInput]),
    __metadata("design:returntype", Promise)
], CardResolver.prototype, "addCard", null);
CardResolver = __decorate([
    graphql_1.Resolver(of => card_entity_1.Card),
    __metadata("design:paramtypes", [card_service_1.CardService])
], CardResolver);
exports.CardResolver = CardResolver;
//# sourceMappingURL=card.resolver.js.map
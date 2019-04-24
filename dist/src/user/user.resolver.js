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
const type_graphql_1 = require("type-graphql");
const user_entity_1 = require("./user.entity");
const user_service_1 = require("./user.service");
const card_service_1 = require("src/card/card.service");
const user_input_1 = require("./user.input");
let UserResolver = class UserResolver {
    constructor(userService, cardService) {
        this.userService = userService;
        this.cardService = cardService;
    }
    user(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userService.findOne(id);
        });
    }
    addUser(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userService.add(userData);
        });
    }
    editUser(userData, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userService.edit(id, userData);
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userService.delete(id);
        });
    }
    cards(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = user;
            return yield this.cardService.findAll({ user: id });
        });
    }
};
__decorate([
    graphql_1.Query(() => user_entity_1.User),
    __param(0, graphql_1.Args({ name: 'id', type: () => type_graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "user", null);
__decorate([
    graphql_1.Mutation(() => user_entity_1.User),
    __param(0, graphql_1.Args('userData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_input_1.UserInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "addUser", null);
__decorate([
    graphql_1.Mutation(() => user_entity_1.User),
    __param(0, graphql_1.Args('userData')),
    __param(1, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_input_1.UserInput, Number]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "editUser", null);
__decorate([
    graphql_1.Mutation(() => user_entity_1.User),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "deleteUser", null);
__decorate([
    graphql_1.ResolveProperty('cards'),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "cards", null);
UserResolver = __decorate([
    graphql_1.Resolver(of => user_entity_1.User),
    __metadata("design:paramtypes", [user_service_1.UserService,
        card_service_1.CardService])
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map
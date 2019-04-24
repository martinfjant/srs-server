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
const repetition_entity_1 = require("./repetition.entity");
const repetition_service_1 = require("./repetition.service");
let RepetitionResolver = class RepetitionResolver {
    constructor(repetitionService) {
        this.repetitionService = repetitionService;
    }
    repetitions() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repetitionService.findAll();
        });
    }
};
__decorate([
    graphql_1.Query(() => [repetition_entity_1.Repetition]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RepetitionResolver.prototype, "repetitions", null);
RepetitionResolver = __decorate([
    graphql_1.Resolver(of => repetition_entity_1.Repetition),
    __metadata("design:paramtypes", [repetition_service_1.RepetitionService])
], RepetitionResolver);
exports.RepetitionResolver = RepetitionResolver;
//# sourceMappingURL=repetition.resolver.js.map
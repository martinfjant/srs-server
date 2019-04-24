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
const factoryPath = 'src/database/factories/';
const seedsPath = 'src/database/seeds/';
const run = () => __awaiter(this, void 0, void 0, function* () {
    let factoryFiles;
    let seedFiles;
    try {
        factoryFiles = yield typeorm_seeding_1.loadEntityFactories(factoryPath);
        seedFiles = yield typeorm_seeding_1.loadSeeds(seedsPath);
    }
    catch (error) {
        return handleError(error);
    }
    console.log({ factoryFiles });
    console.log({ seedFiles });
    try {
        const connection = yield typeorm_seeding_1.loadConnection();
        typeorm_seeding_1.setConnection(connection);
    }
    catch (error) {
        return handleError(error);
    }
    for (const seedFile of seedFiles) {
        try {
            const fileName = seedFile.split('/').pop();
            const className = fileName
                .replace('.ts', '')
                .split('-')
                .pop();
            const seedFileObject = require(seedFile);
            console.log(`executing seed:${fileName}`);
            yield typeorm_seeding_1.runSeed(seedFileObject[className]);
        }
        catch (error) {
            console.error('Could not run seed ', error);
            process.exit(1);
        }
    }
    console.log('finished seeding...');
    process.exit(0);
});
const handleError = error => {
    console.error(error);
    process.exit(1);
};
run();
//# sourceMappingURL=seed.js.map
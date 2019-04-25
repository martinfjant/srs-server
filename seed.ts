import {
  loadConnection,
  loadEntityFactories,
  loadSeeds,
  runSeed,
  setConnection,
} from 'typeorm-seeding';

const factoryPath = 'src/database/factories/';
const seedsPath = 'src/database/seeds/';

const run = async () => {
  let factoryFiles;
  let seedFiles;
  try {
    factoryFiles = await loadEntityFactories(factoryPath);
    seedFiles = await loadSeeds(seedsPath);
  } catch (error) {
    return handleError(error);
  }
  console.log({ factoryFiles });
  console.log({ seedFiles });

  try {
    const connection = await loadConnection();
    setConnection(connection);
  } catch (error) {
    return handleError(error);
  }

  for (const seedFile of seedFiles) {
    try {
      const fileName = seedFile.split('/').pop();
      const className = fileName
        .replace('.ts', '')
        .split('-')
        .pop();

      const seedFileObject: any = require(seedFile);

      console.log(`executing seed:${fileName}`);
      await runSeed(seedFileObject[className]);
    } catch (error) {
      console.error('Could not run seed ', error);
      process.exit(1);
    }
  }

  console.log('finished seeding...');
  process.exit(0);
};

const handleError = error => {
  console.error(error);
  process.exit(1);
};

run();

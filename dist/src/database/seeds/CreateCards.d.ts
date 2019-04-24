import { Seed, Factory } from 'typeorm-seeding';
import { Connection } from 'typeorm';
export declare class CreateCards implements Seed {
    seed(factory: Factory, connection: Connection): Promise<any>;
}

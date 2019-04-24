import { Repetition } from './repetition.entity';
import { Repository } from 'typeorm';
export declare class RepetitionService {
    private readonly repetitionRepository;
    constructor(repetitionRepository: Repository<Repetition>);
    findAll(): Promise<Repetition[]>;
}

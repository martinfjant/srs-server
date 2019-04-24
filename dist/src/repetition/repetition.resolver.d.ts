import { Repetition } from './repetition.entity';
import { RepetitionService } from './repetition.service';
export declare class RepetitionResolver {
    private readonly repetitionService;
    constructor(repetitionService: RepetitionService);
    repetitions(): Promise<Repetition[]>;
}

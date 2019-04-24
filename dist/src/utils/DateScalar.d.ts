import { CustomScalar } from '@nestjs/graphql';
import { ValueNode } from 'graphql';
export declare class DateScalar implements CustomScalar<number, Date> {
    description: string;
    parseValue(value: number): Date;
    serialize(value: Date): number;
    parseLiteral(ast: ValueNode): Date;
}

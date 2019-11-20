import { IsBoolean, IsString } from 'class-validator';

export class ScoreDto {
    //1 is + | 0 is - 
    @IsBoolean()
    readonly type: boolean;

    @IsString()
    readonly id: string;
}
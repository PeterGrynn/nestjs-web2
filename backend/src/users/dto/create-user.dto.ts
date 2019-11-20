import { IsNotEmpty, IsString } from 'class-validator';
export class CreateUserDto {
    @IsNotEmpty()
    readonly email: string;

    @IsString()
    readonly username: string;

    @IsNotEmpty()
    readonly password: string;
}
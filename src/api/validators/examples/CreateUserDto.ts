import { IsEmail, IsString, MinLength, IsOptional, IsBoolean } from 'class-validator';

export class CreateUserDto {
    @IsEmail()
    public email!: string;

    @IsString()
    @MinLength(2)
    public firstName!: string;

    @IsString()
    @MinLength(2)
    public lastName!: string;

    @IsString()
    @MinLength(6)
    public password!: string;

    @IsOptional()
    @IsBoolean()
    public isActive?: boolean;
}

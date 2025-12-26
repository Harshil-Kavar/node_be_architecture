import { IsEmail, IsString, MinLength, IsOptional, IsBoolean } from 'class-validator';

export class UpdateUserDto {
    @IsOptional()
    @IsEmail()
    public email?: string;

    @IsOptional()
    @IsString()
    @MinLength(2)
    public firstName?: string;

    @IsOptional()
    @IsString()
    @MinLength(2)
    public lastName?: string;

    @IsOptional()
    @IsString()
    @MinLength(6)
    public password?: string;

    @IsOptional()
    @IsBoolean()
    public isActive?: boolean;
}

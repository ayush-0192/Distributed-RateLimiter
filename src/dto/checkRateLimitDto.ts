import { IsString, Length } from "class-validator";

export class CheckRateLimitDto {
    @IsString()
    @Length(1, 100)
    clientId!: string;
    
    @IsString()
    @Length(1, 200)
    resource!: string;
}
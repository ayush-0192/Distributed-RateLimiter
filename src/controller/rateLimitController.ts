import { Body, JsonController, Post } from "routing-controllers";
import { Service } from "typedi";
import { RateLimitService } from "../service/rateLimitService";
import { CheckRateLimitDto } from "../dto/checkRateLimitDto";

@JsonController('/api/v1/rate-limits')
@Service()
export class RateLimitController {
    constructor(private readonly rateLimitService: RateLimitService){}
 
    @Post('/check')
    checkRateLimit(@Body() request: CheckRateLimitDto) {
        return this.rateLimitService.check(request.clientId,request.resource)
    }
}
import {  Get, JsonController } from "routing-controllers";
import { Service } from "typedi";
import { HealthService } from "../service/healthService";
@JsonController('/health')
@Service()
export class HealthController {
    constructor( 
        private readonly healthService: HealthService
    ){}
    
    @Get('/')
    checkHealth() {
        return this.healthService.check()
    }
}
import { Service } from "typedi";
import { FixedWindowAlgo } from "../algorithm/fixedWindowAlgo";

@Service()
export class RateLimitService {
    private readonly limit = 1;
    private readonly windowSeconds = 60;

    constructor(private readonly fixedWindowAlgo: FixedWindowAlgo){}

    check(clientId: string, resource: string) {
        const key = `${clientId}:${resource}`;

        const result = this.fixedWindowAlgo.check(key,this.limit,this.windowSeconds);

        return {
            ...result,
            resetAt: new Date(result.resetAt).toISOString()
        };
    }
}
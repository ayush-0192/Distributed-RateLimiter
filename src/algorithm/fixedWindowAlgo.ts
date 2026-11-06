import { resolveObjectURL } from "node:buffer";
import { allowedNodeEnvironmentFlags } from "node:process";
import { Service } from "typedi";

interface WindowRecord{
    windowStart: number;
    count: number;
}

interface RateLimitResult {
    allowed: boolean;
    limit: number;
    remaining: number;
    resetAt: number;
    retryAfterSeconds: number;
}

@Service()
export class FixedWindowAlgo {
    private windows = new Map<string, WindowRecord>()

    check(key: string, limit:number, windowSeconds: number): RateLimitResult {
        const now = Date.now();
        const windowMs = windowSeconds*1000;

        const windowStart = Math.floor(now/windowMs)*1000;

        let record = this.windows.get(key);

        if(!record || record.windowStart !== windowStart) {
            record = {
                windowStart,
                count: 0,
            };
        }

        record.count++;
        this.windows.set(key,record);

        const allowed = record.count <= limit;

        const remaining = Math.max(0,limit-record.count);

        const resetAt = windowStart + windowMs;

        const retryAfterSeconds = allowed ? 0 : Math.ceil((resetAt-now)/1000);

        return {
            allowed,
            limit,
            remaining,
            resetAt,
            retryAfterSeconds,
        };
    }
}
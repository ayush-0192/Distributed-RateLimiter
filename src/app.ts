import { createExpressServer } from "routing-controllers";
import { configureContainer } from "./config/container";
import { HealthController } from "./controller/healthController";
import { RateLimitController } from "./controller/rateLimitController";

configureContainer()

export const app = createExpressServer({
    controllers: [
        HealthController,
        RateLimitController,
    ],
    defaultErrorHandler: true
})
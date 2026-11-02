import { createExpressServer } from "routing-controllers";
import { configureContainer } from "./config/container";
import { HealthController } from "./controller/healthController";

configureContainer()

export const app = createExpressServer({
    controllers: [
        HealthController
    ],
    defaultErrorHandler: true
})
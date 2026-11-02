import{Service} from "typedi"

@Service()
export class HealthService {
    check() {
        return {
            status: "healthy",
            service: "rate limiter",
            timeStamp: new Date().toISOString()
        }
    }
}
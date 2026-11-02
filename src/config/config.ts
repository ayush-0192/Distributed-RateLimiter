import {z} from "zod";
import './env'

const envSchema = z.object({
    PORT: z.coerce.number()
});

export const env = envSchema.parse(process.env)

export const config = {
    port: env.PORT
}
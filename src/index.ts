import "reflect-metadata";
import { app } from "./app";
import { config } from "./config/config";

//const PORT = 4000;

app.listen(config.port, ()=>{
    console.log(`Server started on port ${config.port}`)
})
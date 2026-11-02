import { useContainer } from "class-validator";
import Container from "typedi";

export function configureContainer() {
    useContainer(Container)
}
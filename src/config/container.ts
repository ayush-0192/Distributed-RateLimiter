import { useContainer } from "routing-controllers";
import Container from "typedi";

export function configureContainer() {
    useContainer(Container)
}
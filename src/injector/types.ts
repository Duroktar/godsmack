import { Container } from "./Container";
import { EmptyType } from "../types";

export type InferContainerType<T> = T extends Container<infer C> ? Exclude<C, EmptyType> : never;

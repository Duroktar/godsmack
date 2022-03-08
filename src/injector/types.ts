import type { Container } from "./Container";
import type { EmptyType } from "../types";

export type InferContainerT<T> = T extends Container<infer C> ? Exclude<C, EmptyType> : never;

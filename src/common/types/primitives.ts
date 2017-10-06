export type Primitive = string|number|object|undefined|null;
export interface PrimitiveObject {
    [key: string]: Primitive|Readonly<Primitive>|Primitive[]|Readonly<Primitive[]>;
}

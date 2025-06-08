type Animal = string | number | undefined;
declare let animal: Animal;
type Student = {
    name: string;
    age: number;
};
type GF = {
    readonly name: string;
};
declare const gf: GF;
type Name = string;
type Age = number;
type Person = Name | Age;
type PositionX = {
    x: number;
};
type PositionY = {
    y: number;
};
type Position = PositionX & PositionY;
declare let position: Position;

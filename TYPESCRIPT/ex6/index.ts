type Animal = string | number | undefined;

let animal: Animal;

animal = 'CAT';

console.log(animal);

type Student = { name: string, age: number }

type GF = {
  readonly name: string
}
const gf: GF = {
  name: 'marry'
};

//gf.name = "jane";

console.log(gf);

type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = {
  x: number
}
type PositionY = {
  y: number
}
type Position = PositionX & PositionY;

let position: Position = {
  x: 10,
  y: 20
};
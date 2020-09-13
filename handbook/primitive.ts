
// boolean
let isDone: boolean = false;

let createdByNewBoolean = new Boolean(0);

// number
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;

let binaryLiteral: number = 0b1010;

let octalLiteral: number = 0o774;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

// string
let myName: string = "Tom";
myName = "cc";
let myAge: number = 25;

let sentence: string = `Hello, my name is ${myName}.
I will be ${myAge + 1} years old next month.`;

// array
let list: number[] = [1, 2, 3];
let glist: Array<number> = [1, 2, 3, 4];

console.log(list[-1]);
console.log(glist[3]);

// tuple
let tuple: [string, number] = ["name", 10];
let tuple1: [number, string];
tuple1 = [1, "cc"];

console.log(tuple[0]);
console.log(tuple1[1]);

let tuple2: [number, number, string];

tuple2 = [4, 4, tuple[0]];

// enum
enum Color {
    Red,
    Green,
    Blue,
}

let c: Color = Color.Green;

// unknown
let notSure: unknown = 8;
notSure = "not sure";

// any
declare function getValue(key: string): any;

const str: string = getValue("myString");

// void
function warnUser(): void {
    console.log("This is my warning message.");
}

// null
let n: null = null;

// as
let someValue: unknown = "this is a stirng";
let strLength: number = (someValue as string).length;
strLength = (<string>someValue).length;


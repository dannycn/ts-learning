interface Person {
    Id: number;
    Title: string;
}

interface LabeledValue {
    Title: string;
}

function print(obj: Person | LabeledValue) {
    console.log(obj.Title);
}

let tom: Person = {
    Id: 8,
    Title: "xxx"
};

let myObj = {
    size: 10,
    Title: "Size 10 Object"
};

print(tom);
print(myObj);

// optional
interface OptionalProp {
    color?: string;
    width?: number;
}

function createSquare(config: OptionalProp): { color: string; area: number } {

    let newSquare = { color: "white", area: 100 };

    if (config.color) {
        newSquare.color = config.color;
    }

    if (config.width) {
        newSquare.area = config.width * config.width;
    }

    return newSquare;
}

let mySquare = createSquare({ color: "black" });

// readonly
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;

// function
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = (source, subString) => {

    let result: number = source.search(subString);

    return result > -1;
}

// index
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

// class
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}

class Clock implements ClockInterface {

    currentTime: Date = new Date();

    constructor(h: number, m: number) {

    }

    setTime(d: Date): void {
        this.currentTime = d;
    }
}
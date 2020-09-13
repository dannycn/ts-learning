// Named function
function add(x: number, y: number): number {
    return x + y;
}

// Anonymous function
let myAdd = function (x: number, y: number): number {
    return x + y;
}

let myAdd1: (x: number, y: number) => number
    = function (x: number, y: number): number {
        return x + y;
    }

let myAdd2: (x: number, y: number) => number
    = (x, y) => x + y;

function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return `${firstName} ${lastName}`;
    }
}

buildName("Bob");
buildName("Bob", "Adams");

function buildName1(firstName: string, lastName = "Smith") {
    return `${firstName} ${lastName}`;
}

buildName1("Bob");
buildName1("Bob", "Adams");

function buildName2(firstName: string, ...lastName: string[]) {
    return `${firstName} ${lastName.join(" ")}`;
}

buildName2("Joseph", "Samuel", "Lucas", "MacKinzie");


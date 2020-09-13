function identity<T>(arg: T): T {
    return arg;
}

let i = identity(1);
let s = identity("s");

class User<T>{
    id: T;

    print(): T {
        return this.id;
    }
}

var u = new User<number>();
u.id = 1;
console.log(u.print());

var uu: User<string> = { id: "lala", print: () => "" };
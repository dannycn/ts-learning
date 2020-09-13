type Easing = "ease-in" | "ease-out" | "ease-in-out";

class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
        if (easing === "ease-in") {

        } else if (easing === "ease-out") {

        } else if (easing === "ease-in-out") {

        } else {

        }
    }
}

function padLeft(value: string, pading: string | number) {

}

interface Bird {
    fly(): void;
    layEggs(): void;
}

interface Fish {
    swim(): void;
    layEggs(): void;
}

declare function getSmallPet(): Fish | Bird;


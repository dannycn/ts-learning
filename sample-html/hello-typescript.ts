class BirdWhisperer {

    chirpping: string

    constructor(message: string) {
        this.chirpping = message;
    }

    chirp() {
        return "An~ oh~ " + this.chirpping
    }
}

let birdWhisperer = new BirdWhisperer("coo-coo-coo...");

let message = birdWhisperer.chirp();

console.log(message)

// document.body.innerHTML = birdWhisperer.chirp();
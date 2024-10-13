class Console {
    #arguments;
    #history;

    constructor(parameters) {
        this.#arguments = parameters;
        this.#history = [];
    }

    log(secondParameters) {
        let message;
        if (secondParameters !== undefined) {
            if (Array.isArray(secondParameters)) {
                message = `${this.#arguments}: [${secondParameters}]`;
            } else if (typeof secondParameters === 'object' && secondParameters !== null) {
                message = `${this.#arguments}: {${JSON.stringify(secondParameters).slice(1, -1)}}`;
            } else {
                message = `${this.#arguments}: ${secondParameters}`;
            }
        } else {
            message = `${this.#arguments}`;
        }
        this.#history.push(message);
        return message;
    }

    history() {
        return this.#history;
    }

    clearHistory() {
        this.#history = [];
        return "History cleared.";
    }
}

const myConsole = new Console('Regular');
const fancyConsole = new Console('Fancy');

console.log(myConsole.log([1, 2, 3, 4]));
console.log(myConsole.log({ a: 1, b: 2 }));
console.log(myConsole.history());
console.log(myConsole.clearHistory());
console.log(myConsole.history());
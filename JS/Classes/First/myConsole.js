class Console {
    constructor(parameters) {
        this._arguments = parameters;
        this._history = [];
    }

    log(secondParameters) {
        let message;
        if (secondParameters !== undefined) {
            if (Array.isArray(secondParameters)) {
                message = `${this._arguments}: [${secondParameters}]`;
            } else if (typeof secondParameters === 'object' && secondParameters !== null) {
                message = `${this._arguments}: {${JSON.stringify(secondParameters).slice(1, -1)}}`;
            } else {
                message = `${this._arguments}: ${secondParameters}`;
            }
        } else {
            message = `${this._arguments}`;
        }
        this._history.push(message);
        return message;
    }

    history() {
        return this._history;
    }

    clearHistory() {
        this._history = [];
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

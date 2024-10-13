class Shiritory {
    #gameOver;

    constructor() {
        this._words = [];
        this.#gameOver = false;
    }

    play(word) {
        if (this.#gameOver) {
            return "Game Over";
        }

        if (this._words.length > 0) {
            const lastWord = this._words[this._words.length - 1];
            const lastChar = lastWord.slice(-1).toLowerCase();
            const firstChar = word.charAt(0).toLowerCase();
            
            if (lastChar !== firstChar) {
                this.#gameOver = true;
                return "Game Over";
            }
        }

        this._words.push(word);
        return this._words;
    }

    restart() {
        this._words = [];
        this.#gameOver = false;
        return "Game Restarted";
    }
}

const myShiritori = new Shiritory();

console.log(myShiritori.play("apple"));
console.log(myShiritori.play("ear"));
console.log(myShiritori.play("rhino"));
console.log(myShiritori.play("corn"));
console.log(myShiritori.words);

console.log(myShiritori.restart());
console.log(myShiritori.words);
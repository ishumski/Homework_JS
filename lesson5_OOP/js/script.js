/*1.Игра в слова. Написать класс GameOfWords. Класс хранит в себе два свойства.
words - список слов использованных в игре и gameOver - boolean поле которое обозначает была ли закончена игра.
Также имеется два метода: play() - метод который принимает в себя слово
(метод должен проверить что слово только одно, и не должно реагировать на пробелы в начале и конце и регистр).
Метод должен проверять, что слово соответствует правилу игры (слово должно начинаться на ту же букву,
на которое заканчивается предыдущее и не должно повторяться) и если оно правильное,
то должен добавлять его в words и вернуть words. Если не правильно, то метод должен вернуть “game over”,
свойство gameOver должно стать true, а слово не должно добавиться в words.
Также есть метод restart(), который очищает words, gameOver ставит на false, и возвращает “game restarted”.
*/

class GameOfWords {
    constructor() {
        this.words = [];
        this.gameOver = false;
    }
    play(word) {
        if (this.gameOver) {
            throw new Error("game is over");
        }
        const trimmedWord = word.trim().toLowerCase();

        if (trimmedWord.split(" ").length > 1 || !trimmedWord.length) {
            return "one word";
        }

        const lastWord = this.words[this.words.length - 1];
        if ((lastWord && lastWord[lastWord.length - 1] !== trimmedWord[0]) || this.words.includes(trimmedWord)) {
            this.gameOver = true;
            return "game over";
        }
        this.words = [...this.words, trimmedWord];
        return this.words;

    }
    restart() {
        this.words = [];
        this.gameOver = false;
        return "this is restarted";
    }
}
const game = new GameOfWords();
try {
    GameOfWords.play("word");
} catch (error) {
    alert(error.message);
} finally {
    // код выполняется в любом случае(не важно есть ошибка или нет)
}

console.log(game.play("apple"));
console.log(game.play("ear"));

// Пример:
// game = GameOfWords.new()

// game.play("apple") ➞ ["apple"]
// game.play("ear") ➞ ["apple", "ear"]
// game.play("rhino") ➞ ["apple", "ear", "rhino"]
// game.play("corn") ➞ "game over"

// game.words ➞  ["apple", "ear", "rhino"]

// game.restart() ➞ "game restarted"
// game.words ➞ []

// game.play("hostess") ➞ ["hostess"]
// game.play("stash") ➞ ["hostess", "stash"]
// game.play("hostess") ➞ "game over"

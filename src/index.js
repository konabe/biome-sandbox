import assert from "node:assert";
import Person from "./legacy/person.js";
import User from "./user.js";

function isOdd(num) {
    return num % 2 === 1;
}

function main() {
    assert.deepEqual(isOdd(1), true);

    const person = new Person("John");
    person.greet();

    const user = new User("Alice", 20);
    user.greet();

    for (let i = 0; i < 10; i++) {
        if (isOdd(i)) {
            console.log(i);
            continue;
        }
        var greeting = "Hello";
        console.log(`${greeting} World!`);
    }
}

main();

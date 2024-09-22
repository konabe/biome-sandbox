import Person from "./legacy/person.js";

export default class User extends Person {
    constructor(name, age) {
        super(name);
        this.age = age;
    }

    greet() {
        super.greet();
        console.log(`I'm ${this.age} years old.`);
    }
}

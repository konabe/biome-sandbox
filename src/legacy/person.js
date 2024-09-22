class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        // biome-ignore lint/style/useConst: 今後の開発のためにどうしてもletを使いたいため。
        let greeting = "Hello";
        var script = `${greeting}, My name is ${this.name}`;

        console.log(script);
    }
}

export default Person;

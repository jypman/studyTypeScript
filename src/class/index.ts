class Person {
    constructor(name : string, age : number, height? : number){
        this.name = name
        this.age = age
        this.height = height
    }
    name : string
    age : number
    height : number
}

let jyp : Person = new Person("jyp", 20)

console.log(jyp) // Person {name : "jyp", age : 20, height: undefined}
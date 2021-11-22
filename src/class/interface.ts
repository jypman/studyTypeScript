interface IPerson2{
    name : string
    age : number
    height? : number
}

class Person2 implements IPerson2{
    constructor(name : string, age : number, height? : number){
        this.name = name
        this.age = age
        this.height = height
    }
    name : string
    age : number
    height : number
}

let jyp2 : Person2 = new Person2("jyp", 20)

console.log(jyp2) // Person2 {name : "jyp", age : 20, height: undefined}
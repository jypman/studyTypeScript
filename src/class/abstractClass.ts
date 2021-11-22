abstract class AbstractPerson {
    abstract name : string
    constructor(public age : number){}
}

class Person3 extends AbstractPerson {
    constructor(public name : string, age : number){
        super(age)
    }
}

let jyp3 : Person3 = new Person3('jyp', 20)
console.log(jyp3)
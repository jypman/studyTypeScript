let person : object = {
    name : "jyp",
    age : 30
}

// let a = person.name // 에러 발생 -> TS2339: Property 'name' does not exist on type 'object'.
let a = (<{name : string}> person).name

console.log(a)
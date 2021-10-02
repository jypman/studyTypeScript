const add = (a : number): (num) => number => (b : number): number => a + b
const result = add(1)(2)
console.log(result)
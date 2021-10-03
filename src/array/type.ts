const numArray : number[] = [1,2,3]
const strArray : string[] = ['a','b','c']

type user = {name : string, age? : number}
const userArray : user[] = [{name : "jyp"}, {name : "fgh", age : 17}]

console.log(
    'numArray :', numArray + '\n',
    'strArray :', strArray + '\n',
    'userArray :', userArray
)
function fn(arg1 : string, arg? : number):void {
    console.log(`arg : ${arg}`)
}
fn("hello", 1)
fn("hello")

type arg = (string, number?) => void
let argFunc : arg = function (arg1 : string, arg? : number):void {
    console.log(`arg : ${arg}`)
}
argFunc("jyp", 20)
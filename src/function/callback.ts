const init = (myCallback : () => void): void => {
    console.log(1)
    myCallback()
    console.log(3)
}

const calc = (value : number, cb : (num) => void) => {
    const add = (a : number, b : number) => a + b
    const multiply = (c : number, d : number) => c * d
    const result = multiply(add(1,2), value)
    cb(result)
}

init(() => console.log(2))
calc(30, (data : number) => console.log(`result is ${data}`))
const globalVariable = 1

function pure(a : number, b : number): number {
    return a + b
}

function impure(array : number[]):void {
    array.push(1)
    array.splice(0, 1)
}

function impure2(num : number):number {
    return num + globalVariable
}
const create = <T extends {new() : T}>(type : T): T => new type()
const CREATE = <T>(type : new() => T): T => new type()

const create2 = <T>(type : {new(...args): T}, ...args) : T => new type(...args)
const CREATE2 = <T>(type : new(...args) => T, ...args) : T => new type(...args)

class Point {
    constructor(public x : number, public y : number) {}
}

[ CREATE2(Date), CREATE2(Point, 0, 0) ].forEach( s => console.log(s))
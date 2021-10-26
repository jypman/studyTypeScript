export interface IValuable <T> {
    value : T
}

export function func<T>(arg : T):T {
    return arg
}

export class Valuable<T> implements IValuable<T>{
    constructor(public value : T) {}
}
import {
    FirstOrderFunc,
    SecondOrderFunc,
    ThirdOrderFunc
} from "./functionSignature";

export const inc : FirstOrderFunc<number> = (x : number): number => x + 1

export const sub : SecondOrderFunc<number> =
    (x : number): FirstOrderFunc<number> =>
        (y : number): number => x - y

export const mul : ThirdOrderFunc<number> =
    (x : number): SecondOrderFunc<number> =>
        (y : number) : FirstOrderFunc<number> =>
            (z : number) : number => x * y * z
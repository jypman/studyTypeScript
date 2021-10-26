import {IValuable, Valuable} from "./genericType";

export const printValueT = <Q, T extends IValuable<Q>>(o : T) =>
    console.log(o.value)

printValueT(new Valuable<number>(1))
printValueT({value : true})
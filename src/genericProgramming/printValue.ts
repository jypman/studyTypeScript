import {IValuable, Valuable} from "./genericType";

const printValue = <T>(o : IValuable<T>):void => console.log(o.value)

printValue(new Valuable<number>(1))
printValue(new Valuable<boolean>(true))
printValue(new Valuable<string>('hello'))
printValue(new Valuable<number[]>([1,2,3]))
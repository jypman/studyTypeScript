import {pipe} from "./pipe";

// const map = f => a => a.map(f)로 간단하게 생력할 수 있다.
// customMap 함수가 포인트가 없는 함수다.
const customMap = <T>(f : (T) => T) : Function =>
    (a : T[]) : T[] => a.map(f)

const square = (val : number) : number => val * val

const squaredMap = customMap(square)

const fourSquare = pipe(
    squaredMap,
    squaredMap
)

// 매개변수 a는 [3,4]이다.
console.log('fourSquare 결과 :', fourSquare([3,4]))
import {range} from "./range";
import {fold, filter} from "./fold";

// 입력 데이터 생성
let numberArray : number[] = range(1, 101) // [1,2,3, ..., 100]

// 입력 데이터 중 모든 수의 합이 나오도록 가공
let result = fold(
    numberArray,
    (result, value) => result + value,
    0
)

const isOdd = (n : number): boolean => n % 2 !== 0

// 입력 데이터 중 홀수의 합이 나오도록 가공
let result2 = fold(
    filter(numberArray, isOdd),
    (result, value) => result + value,
    0
)

console.log('1부터 100까지의 합 :', result)
console.log('1부터 100까지의 홀수의 합 :', result2)

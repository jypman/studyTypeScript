import {pipe} from "./pipe"

const add = (x : number) : Function =>
    (y : number) : number =>
        x + y

// inc 함수는 add 함수의 부분 함수
const inc = add(1)

const add2 = pipe(inc, add(2))

// add2는 함수를 반환하기 때문에 add2의 매개변수에 값을 할당하여 새로운 값을 반환한다.
console.log('부분함수 반환 :' ,add2)
console.log('부분함수를 조합한 결과 :' ,add2(3)) // 3 + 2 + 1 = 6
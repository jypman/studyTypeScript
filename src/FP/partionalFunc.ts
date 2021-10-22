import {
    FirstOrderFunc,
    SecondOrderFunc
} from "./functionSignature";
import {
    sub,
    mul
} from "./highOrderFunc"

// newSub는 1차 함수다.
const newSub : FirstOrderFunc<number> = sub(3)
// newMul은 2차 함수다.
const newMul : SecondOrderFunc<number> = mul(2)

// newSub는 sub(3)과 같으므로 newSub(4)는 sub(3)(4)와 같다.
console.log(newSub(4))
console.log(sub(3)(4))

// newMul은 mul(2)와 같으므로 newMul(3)(4)는 mul(2)(3)(4)와 같다.
console.log(newMul(3)(4))
console.log(mul(2)(3)(4))
// 동일한 애리티를 갖고 있는 a,b,c 함수가 있다.
export const a = <T>(x :T):string => `a(${x})`
export const b = <T>(x :T):string => `b(${x})`
export const c = <T>(x :T):string => `c(${x})`

// 해당 함수는 2차 함수다.
export const compose = <T>(...functions : readonly Function[]) : Function => {
    return (initVal : T): (T) => T => {
        const deepCopiedFunctions = [...functions]
        return deepCopiedFunctions.reduce((result, func) => func(result), initVal)
    }
}

// ...functions에 a,b,c가 할당
// composedABC는 1차함수다.
export const composedABC = compose(a, b, c)

// initVal에 hello가 할당
console.log(composedABC('hello'))
console.log(compose(a, b, c)('hello'))
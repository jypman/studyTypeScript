import {a, b, c} from "./compose";

export const pipe = <T>(...functions : readonly Function[]): Function => {
    return (initVal : T): (T) => T => {
        return functions.reduce((result, func) => func(result), initVal)
    }
}

const piped = pipe(a, b, c)

console.log('pipe 함수 결과 :', piped('x'))
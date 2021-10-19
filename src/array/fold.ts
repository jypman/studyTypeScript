// JS와 TS의 내장 객체 중 하나인 reduce
export const fold = <T>(array : T[], callback : (result : T, val : T) => T, initValue : T) => {
    let result : T = initValue;
    for (let i : number = 0; i < array.length; i++) {
        const value = array[i]
        result = callback(result, value)
    }
    return result
}

// JS와 TS의 내장 객체 중 하나인 filter
export const filter = <T>(array : T[], callback : (value : T) => boolean): T[] => {
    let result :T[] = []
    for (let i : number = 0; i < array.length; ++i) {
        const value = array[i]
        if(callback(value)){
            result = [...result, value]
        }
    }
    return result
}
const mergeArray = <T>(...arrays : readonly T[][]) : T[] => {
    let result : T[] = []
    for (let i = 0; i < arrays.length; i++) {
        const array : T[] = arrays[i]
        result = [...result, ...array]
    }
    return result
}

console.log(mergeArray(
    [1],[2],[3],[4]
))

console.log(mergeArray(
    ['a'],['b'],['c'],['d']
))
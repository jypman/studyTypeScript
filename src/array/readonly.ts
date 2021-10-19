// function forcePure(array : readonly number[]) {
//     array.push(1)
// }

const pureSort = <T>(array : readonly T[]): T[] => {
    let deepCopied = [...array]
    return deepCopied.sort()
}

let beforeSort : number[] = [4, 1, 2, 6]
const afterSort = pureSort(beforeSort)

console.log('정렬 전 배열:', beforeSort)
console.log('정렬 후 배열:', afterSort)
const arrayLength = <T>(array : T[]):number => array.length
const isEmpty = <T>(array : T[]): boolean => arrayLength(array) === 0
const identity = <T>(id : T) : T => id

console.log('배열 갯수 :', arrayLength([1,2,3]))
console.log('과연 빈 배열인가? :', isEmpty([]))
console.log('과연 빈 배열인가? :', isEmpty([1]))
console.log('나는 무슨 타입일까?' ,typeof identity<number>(1))
console.log('나는 무슨 타입일까?' ,typeof identity<string>('jyp'))
console.log('나는 무슨 타입일까?' ,typeof identity<object>([]))
// 타입추론 코드 번거로워 생략 가능
console.log('나는 무슨 타입일까?' ,typeof identity({}))


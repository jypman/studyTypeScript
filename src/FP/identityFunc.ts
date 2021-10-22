// 입력된 타입과 출력 타입이 다른 함수 시그니처다.
type MapFunc<T, R> = (T) => R

// IdentityFunc 함수 시그니처의 경우 MapFunc를 통해 입력된 타입과 출력 타입을 같도록 한다.
// 이처럼 아이덴티티 함수는 입력된 타입과 출력된 타입이 서로 같은 함수를 의미한다.
type IdentityFunc<T> = MapFunc<T, T>

const numIdentity : IdentityFunc<number> = (x:number):number => x
const strIdentity : IdentityFunc<string> = (x:string):string => x
const objIdentity : IdentityFunc<object> = (x:object):object => x
const arrIdentity : IdentityFunc<any[]> = (x : any[]): any[] => x

console.log(numIdentity(1))
console.log(strIdentity('hello'))
console.log(objIdentity({}))
console.log(arrIdentity([]))
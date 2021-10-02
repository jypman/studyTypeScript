interface INameable {
    name : string
}

// undefined는 최하위 타입이므로 INameable을 상속하는 자식 타입으로 간주하여 구문 오류가 발생하지 않음
// undefined 타입을 고려하지 않을 경우 코드 실행 시 에러가 발생했다.
// function getName(o : INameable) {
//     return o.name
// }
function getName(o : INameable) {
    return o !== undefined ? o.name : 'unknown name'
}

let ud = getName(undefined)
let d = getName({name : "jyp"})
console.log(ud)
console.log(d)
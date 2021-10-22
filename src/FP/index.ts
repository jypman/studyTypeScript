// 타입스크립트의 함수는 매개변수와 반환값에 타입이 존재하기 때문에
// 함수조합을 구현할 때 제레릭 함수 구문을 사용해야 한다.

function hello1 <T> (a : T):void {}
function hello2 <T, Q>(a : T, b : Q):void {}

const hi1 = <T>(a : T) : void => {}
const hi2 = <T, Q> (a : T, b : Q) : void => {}

type hallo1 <T> = (T) => void
type hallo2 <T, Q> = (T, Q) => void
type hallo3 <T,Q,R> = (T,Q) => R
const normal = (cb : (num) => number): void => {}

// error error2 함수의 경우 매개변수명이 중복되어 에러 발생
// 매개변수 부분에 변수이름을 기입하면 에러 해결

// const error = (cb : (num, num?) => number): void => {}
const fixed= (cb : (a : number, num?) => number): void => {}

// const error2 = <T>(cb : (T, T) => number):void => {}
const fixed2 = <T>(cb : (arg : T, i? : T) => number):void => {}
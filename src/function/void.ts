// 함수가 값을 반환하지 않을 경우 함수의 타입은 void
const userInfo = (name : string, age : number):void => {
    console.log(`name1 : ${name}, age1 : ${age}`)
}
const userInfo2 : (string, number) => void = function (name : string, age : number): void {
    console.log(`name2 : ${name}, age2 : ${age}`)
}

const userInfo3 : (string, number) => string =  (No : string, age : number): string => `${No}. ${age}`

type stringNumberFunc = (string, number) => void

const userInfo4 : stringNumberFunc = function (name : string, age : number): void {
    console.log(`name4 : ${name}, age4 : ${age}`)
}
userInfo('jyp',27)
userInfo2('fgh', 20)
console.log(userInfo3("No", 27))
userInfo4('asd', 21)
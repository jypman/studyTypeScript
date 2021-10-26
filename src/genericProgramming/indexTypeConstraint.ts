const pick = <T, K extends keyof T>(obj : T, keys : K[]) : object => keys
    .map(key => ({
        [key] : obj[key]
    }))
    .reduce((result, value) => ({
        ...result,
        ...value
    }), {})

const obj = {
    name : "jyp",
    age : 27,
    city : 'seoul',
    country : 'korea'
}
console.log(
    pick(obj, ['name', 'country']),
    // 인덱스 타입 제약을 적용한 함수를 아래와 같이 obj에 없는 속성을 인자로 할당하여 호출한 경우 에러가 발생한다.
    // pick(obj, ['abc', 'def'])
)
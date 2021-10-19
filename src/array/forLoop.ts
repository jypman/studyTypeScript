const names : string[] = ['jyp', 'fgh', 'asd']

// for-in 반복문은 객체의 요소를 반복할 때 사용한다.
// JS와 TS 생태계에서 배열은 객체이므로 for-in 반복문 사용 가능
for (let index in names) {
    console.log('배열 names 정보 -> ',`${[index]} : ${names[index]}`)
}

for (let item of names) {
    console.log('배열 names 각 아이템 -> ', `${item}`)
}
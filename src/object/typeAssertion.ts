interface INameable {
    name : string
}

let obj1 : object = {
    name : "jyp",
    age : 30
}

// 타입 단언은 다음과 같이 두 가지 방식이 있으며 내용상으로 같다.
let name1 = (<INameable>obj1).name
let name2 = (obj1 as INameable).name

console.log('name1 : ', name1, 'name2 : ', name2)
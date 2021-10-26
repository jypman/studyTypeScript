const mergeObject = <T, U>(a : T, b : U): T & U => ({
    ...a,
    ...b
})

type IName = {
    name : string
}
type IAge = {
    age : number
}

const nameAndAge : IName & IAge = mergeObject({name : 'jyp'}, {age : 100})
console.log(nameAndAge)
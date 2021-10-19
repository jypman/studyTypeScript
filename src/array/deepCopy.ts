const user : string[] = ['a', 'b', 'c']
let deepCopy : string[] = [...user]

deepCopy[0] = 'b'
console.log('user : ',user, 'deepCopy :',deepCopy)

/////////////////////////////////////////////////////////////////

type arr = string[]
const user2 : arr[] = [['a'], ['b'], ['c']]
let notDeepCopy : arr[] = [...user2]
notDeepCopy[0][0] = 'b'
console.log('user2 : ',user2, 'notDeepCopy :', notDeepCopy)


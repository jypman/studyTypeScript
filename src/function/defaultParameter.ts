type User = {name : string, age : number}

const gameUser = (name : string, age : number = 10) : User => ({name, age})

console.log(gameUser("jyp", 20))
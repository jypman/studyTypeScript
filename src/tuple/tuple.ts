const tuple : [boolean, string] = [true, 'hello tuple']
console.log(tuple)

////////////////////////////////////////////////////////

type tupleType = [boolean, string]

const doSomething = () : tupleType => {
    try {
        throw new Error('some error occurs...')
    } catch (err) {
        return [false, err.message]
    }
}

const [Result, errorMessage] = doSomething()
console.log(
    'Result :' ,Result,
    '\n',
    'errorMessage :',errorMessage
)
import {readFile} from "fs";

// promise
const readFilePromise = (fileName : string): Promise <string> => {
    return new Promise <string>((
        resolve : (value : string) => void,
        reject : (error : Error) => void
    ) => {
        readFile(fileName, (error : Error, buffer : Buffer) => {
            if(error) reject(error)
            else resolve(buffer.toString())
        })
    })
}

readFilePromise('../../package.json')
    .then((content : string) => {
        console.log('파일 읽기를 promise를 사용하여 시작하자!')
        console.log('promise로 파일을 읽은 결과 :', content)
    })
    .catch(err => {
        console.log('err 설명 :', err)
    })

Promise.resolve(1)
    .then((value : number) => {
        console.log('promise로 숫자를 반환해보자! 그 결과는?', value)
        return Promise.resolve(2)
    })
    .then((value : number) => {
        console.log('promise를 통해 두번째로 숫자를 반환해보자! 그 결과는?', value)
        return [1,2]
    })
    .then((value : number[]) => {
        console.log('promise를 통해 배열을 반환해보자! 그 결과는?', value)
        return Promise.reject('에러 발생!')
    })
    .catch((err : string) => {
        console.log('promise를 통해 에러를 반환해보자! 그 결과는?', err)
        return [1]
    })
    .then((value : number[]) => {
        console.log('promise를 통해 두번째 배열을 반환해보자! 그 결과는?', value)
    })
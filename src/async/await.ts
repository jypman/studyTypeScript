import {readFile} from "fs";

const readFilePromise = (fileName : string): Promise <string> =>
    new Promise <string>((
        resolve : (value : string) => void,
        reject : (error : Error) => void
    ) => {
        readFile(fileName, (error : Error, buffer : Buffer) => {
            if(error) reject(error)
            else resolve(buffer.toString())
        })
    })

// async/await
const asyncFunc = async () => {
    console.log('파일 읽기를 async/await를 사용하여 시작하자!')
    try {
        const content = await readFilePromise('../../package.json')
        console.log('async/await로 파일을 읽은 결과 :', content)
    } catch (err) {
        console.log('에러 설명 :', err)
    }
}

console.log(asyncFunc())
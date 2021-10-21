import {readFile, readFileSync} from "fs";

// 동기
console.log('파일 읽기를 동기적으로 시작하자!')
const buffer : Buffer = readFileSync('../../package.json')
console.log('동기적으로 파일 읽기 결과 :', buffer.toString())

// 비동기
console.log('파일 읽기를 비동기적으로 시작하자!')
readFile('../../package.json', (error : Error, buffer : Buffer) => {
    console.log('비동기적으로 파일 읽기 결과 :', buffer.toString())
})
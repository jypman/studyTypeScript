const getResolvedResult = <T>(promises : Promise<T>[]) => Promise.race(promises)

getResolvedResult<any>([
    Promise.resolve(true),
    Promise.reject('hi error'),
    Promise.reject('hello error')
]).then((result : any[]) => {
    console.log('반환 값 결과 :', result)
}).catch((err : string) => {
    console.log('에러 결과 :', err)
})
getResolvedResult<any>([
    Promise.reject(new Error('에러 발생')),
    Promise.resolve(123),
    Promise.resolve(123),
]).then((result : any[]) => {
    console.log('반환 값 결과 :', result)
}).catch((err : object) => {
    console.log('에러 결과 :', err)
})
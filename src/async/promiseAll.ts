const getAllResolvedResult = <T>(promises : Promise<T>[]) => Promise.all(promises)

getAllResolvedResult<any>([
    Promise.resolve(true),
    Promise.resolve('hi'),
    Promise.resolve(123)
]).then((result : any[]) => {
    console.log('반환 값 결과 :', result)
})

getAllResolvedResult<any>([
    Promise.resolve(true),
    Promise.reject(new Error('에러 발생')),
    Promise.resolve(123)
]).then((result : any[]) => {
    console.log('반환 값 결과 :', result)
}).catch((result : object) => {
    console.log('에러 결과 :', result)
})
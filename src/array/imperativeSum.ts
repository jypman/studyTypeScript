let sum : number = 0
for (let i = 1; i <= 100;) {
    sum += i++;
}
console.log('1부터 100까지의 합 :', sum)

////////////////////////////////////////////////

let sum2 : number = 0
for (let i = 1; i <= 100; i += 2) {
    sum2 += i;
}
console.log('1부터 100까지 홀수의 합 :', sum2)
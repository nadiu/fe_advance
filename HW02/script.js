//отримати число N
let n;

//перевірити чи N ціле число

do {
    n = Number(prompt('введіть число N', ''));
} while (!Number.isInteger(n) && (n !== '' )); 
console.log(n)        


//отримати число M
let m;
     
//перевірити чи M ціле число
do {
    m = Number(prompt('введіть число M, більше за N', ''));
} while 
    (!Number.isInteger(m) || (m < n )); 
console.log(m)  


//чи пропускати парні числа

let missEven = confirm('Чи пропускати парні числа?')

//додавання N & M, пропускаючи парні числа
let sum = 0;
 for (let i = n; n < m; i++){
    if (missEven == true)  {
    sum = m + n; } break
 }

document.writeln('Число N: ' + n + '<br>'); 
document.writeln('Число M: ' + m + '<br>');
document.writeln('Чи  пропускати парні числа?: ' + missEven + '<br>');                
document.writeln('Сума чисел: ' + sum);
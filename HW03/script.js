//1
function getMaxDigit(number){
    if(number == 0){ return 0;}
    else{
      return Math.max(number%10, getMaxDigit(Math.floor(number/10)));
    }
  }
  console.log(getMaxDigit(1684));

//3
function getName(string){
    return string[0].toUpperCase() + string.slice(1, string.length).toLowerCase();
}
console.log(getName('вЛаД'));

//4
function getTax(salary, tax){
    return (salary - ((salary/100)*tax));
}
console.log(getTax(1000, 19.5));

// 5
function getRandomNumber()  {
    const N = 1;
    const M = 50;
    return Math.floor(Math.random() * (M - N) + N);
}
console.log(getRandomNumber());

//6 
function countLetter(text, letter){
    let count=new RegExp(letter,"g");
    return text.toLowerCase().match(count).length;
    }
console.log(countLetter("Асталавіста", "а"));

// 9
function getRandomPassword (length = 8){
    let randomPassword = "";
    const numbers = "0123456789";
    for (let i=0; i<length; i++){
        let randomNumber = Math.floor(Math.random() * length);
        randomPassword += numbers[randomNumber];
    }
    return randomPassword;
}
console.log(getRandomPassword());

//10  
function deleteLetters(string, letter){
    return string.split(letter).join('');
}
console.log(deleteLetters('blablabla', 'a'));

//11
function palindrome(string){
    string = string.toLowerCase()
    return string === string.split('').reverse().join('');
}
console.log(palindrome('Анна'));

document.writeln(`Функція 1: ${getMaxDigit(1684)} <br>`); 
document.writeln(`Функція 3: ${getName("вЛаД")} <br>`);
document.writeln(`Функція 4: ${getTax(1000, 19.5)} <br>`);                
document.writeln(`Функція 5: ${getRandomNumber()} <br>`); 
document.writeln(`Функція 6: ${countLetter("Асталавіста", "а")} <br>`);
document.writeln(`Функція 9: ${getRandomPassword()} <br>`);  
document.writeln(`Функція 10: ${deleteLetters("blablabla", "a")} <br>`); 
document.writeln(`Функція 11: ${palindrome("Анна")} <br>`);


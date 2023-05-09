//3
function getAverage(...numbers) {
    let wholeNumb = (num) => num % 1 ==0;
    let whole = numbers.filter(wholeNumb);
    return whole.reduce((sum, current) => sum + current, 0) / whole.length
}
 console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 2, 56, 3, 2.5, 4.5));

//4  
function getMedian(...numbers) {
    let numb = numbers.filter((number)=> number % 1 == 0);
    numb.sort((a, b) => a - b);
    if (numb.length % 2) {
      return numb[Math.floor(numb.length / 2)];
    } else {
      return (numb[numb.length / 2] + numb[numb.length / 2 - 1]) / 2;
    }
  }
  console.log(getMedian(2, 4, 5, 6, 7, 8.5))

//5
function filterEvenNumbers(...numbers) {
    return numbers.filter(function(number) {
       return number % 2 !== 0
    })
}
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6))

//6
function countPositiveNumbers(...numbers){
    let result1 = numbers.filter((number) => number > 0);
    return result1.reduce((number, sum) => number + sum, 0);
}
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6))

//7
function getDividedByFive(...numbers){
    return numbers.filter((number)=> number % 5 == 0)
}
console.log(getDividedByFive(6, 2, 55, 11, 78, 5, 55, 77, 57, 87, 23, 2, 56, 10, 2));

//9
function divideByThree(word) {
   let txt = word.toLowerCase();
   let text = txt.replace(/ /g, '');
   let newWord = [];
   let interval = 3;
  
   for (let i = 0; i<text.length; i = i + interval){
        newWord.push(text.slice(i, i + interval));
   }
   return newWord
}
console.log(divideByThree("Comm an der"))


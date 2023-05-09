//три змінні, ціни на товар
const apple = 15.678;
const orange = 123.965;
const peare = 90.2345;
//вивід
console.log(apple);
console.log(orange);
console.log(peare);
//максимальне число
console.log(Math.max(apple, orange, peare));
//мінімальне число 
console.log(Math.min(apple, orange, peare));

//вартість всіх товарів
let fruits = apple + orange + peare;
console.log(fruits);

//вартість без копійок в меншу сторону
let appleInteger = (Math.trunc(apple));
let oangeInteger = (Math.trunc(orange));
let peareInteger = (Math.trunc(peare));
console.log(appleInteger, oangeInteger, peareInteger);

//сума товарів без копійок
let fruitsInteger = (appleInteger + oangeInteger+ peareInteger);
console.log(fruitsInteger);

//сума округлена до сотень
let fruitsHundred = Math.round(fruitsInteger / 100) * 100;
console.log(fruitsHundred);

//вивід булевого значення
 function oddOrEven(fruitsInteger) {
    if(fruitsInteger % 2 === 0) {
        console.log("Парне");
    } else {
        console.log("Непарне");
    }
 }
    oddOrEven(fruitsInteger);

//сума решти із 500
console.log(500 - fruits);

//середнє значення цін округлене до сотих
let myArray = [apple, orange, peare];
let arreyLen = myArray.length;
let average = fruits/arreyLen;

console.log(average.toFixed(2));

//змінна знижки
let discount = Math.random();

//випадкова знижка клієнту
console.log(discount);
let appleDiscount = (apple - (discount * apple));
let orangeDiscount = (orange - (discount * orange));
let peareDiscount = (peare - (discount * peare));
let fruitsDiscount = (fruits - (discount * fruits));

console.log(appleDiscount.toFixed(2));
console.log(orangeDiscount.toFixed(2));
console.log(peareDiscount.toFixed(2));
console.log(fruitsDiscount.toFixed(2));

//вивід чистого прибтку зі знижкою
let appleCost = apple / 2;
let orangeCost = orange / 2;
let peareCost = peare / 2;
let fruitsCost = fruits / 2;

let appleProfit = (appleCost - (apple - appleDiscount));
let orangeProfit = (orangeCost - (apple - orangeDiscount));
let peareProfit = (peareCost - (apple - peareDiscount));
let fruitsProfit = (fruitsCost - (apple - fruitsDiscount));

console.log(appleProfit);
console.log(orangeProfit);
console.log(peareProfit);
console.log(fruitsProfit);

//шаблонний рядок

console.log((Math.max(apple, orange, peare)), (Math.min(apple, orange, peare)), (apple + orange + peare), (Math.trunc(apple)), (Math.trunc(orange)), (Math.trunc(peare)), ((Math.trunc(apple)) + (Math.trunc(orange)) + (Math.trunc(peare))), (Math.round((Math.trunc(apple + orange + peare)) / 100) * 100), (((Math.trunc(apple)) + (Math.trunc(orange)) + (Math.trunc(peare))) % 2 === 0 ? `парне` : 'непарне'), (500 - (apple + orange + peare)), ((apple + orange + peare)/([apple, orange, peare].length)).toFixed(2));
function getAverage(...numbers) {
    let wholeNumb = (num) => num % 1 ==0;
    let whole = numbers.filter(wholeNumb);
    return whole.reduce((sum, current) => sum + current, 0) / whole.length
}
//  console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 2, 56, 3, 2.5, 4.5));
export { getAverage };
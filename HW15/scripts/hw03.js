function getMaxDigit(number){
    if(number == 0){ return 0;}
    else{
      return Math.max(number%10, getMaxDigit(Math.floor(number/10)));
    }
  }
// console.log(getMaxDigit(1684));

export { getMaxDigit };
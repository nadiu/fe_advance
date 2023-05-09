const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//1
function getMyTaxes(salary){
    console.log(this.tax * salary)
}
getMyTaxes.call(ukraine, 10000)

//2
function getMiddleTaxes(country, salary){
    console.log(this.tax * this.middleSalary)
}
getMiddleTaxes.call(ukraine)

//3
function getTotalTaxes(country) {
    console.log(this.tax * this.middleSalary * this.vacancies)
}
getTotalTaxes.call(ukraine)

//4
function getMySalary(country){
    let salary = Math.floor(Math.random() * (2000 - 1500) + 1500);
    let taxes = (salary * this.tax);
    let profit = salary - taxes
    
    console.log({
        salary: salary,
        taxes: taxes,
        profit: profit,
    })
}
setInterval(()=> getMySalary.call(ukraine), 10000)

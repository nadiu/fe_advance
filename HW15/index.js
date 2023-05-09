import { appleInteger } from './scripts/hw01.js';

import { getMaxDigit } from './scripts/hw03.js';
import { getPairs } from './scripts/hw04.js';
import { getAverage } from './scripts/hw05.js';
import { getSubjects } from './scripts/hw06.js';
import { getMyTaxes } from './scripts/hw07.js';
import { stud } from './scripts/hw08.js';


import { getRandomChinese } from './scripts/hw11.js';

import { createIdGenerator } from './scripts/hw13.js';


// hw01 -- три змінні, ціни на товар
const apple = 15.678;
console.log(`HW01: ${appleInteger}`);

//hw03 --
console.log(`HW03: ${getMaxDigit(1684)}`);

// hw04 --
const studentS = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
console.log(`HW04: ${getPairs(studentS)}`);

//hw05 --
console.log(`HW05: ${getAverage(6, 2, 55, 11, 78, 2, 55, 2, 56, 3, 2.5, 4.5)}`);

//hw06 --
const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
    }, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
    }, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
    }];
console.log(`HW06:${getSubjects(students[0])}`);
 
//hw07 --
const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
console.log(`HW07: ${getMyTaxes.call(ukraine, 10000)}`);

//hw08 --
console.log(`HW08: ${stud.getInfo()}`);

//hw11 --
console.log(`HW11: ${(getRandomChinese(4))}`);
// console.log(getRandomChinese(4).then(result=>console.log(result)).catch(error => {
//     console.log(error);
// }));

//hw13 --
console.log(`HW13: ${createIdGenerator()}`);
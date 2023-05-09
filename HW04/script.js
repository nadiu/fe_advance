const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

let girls = []
let boys = []
let pairs = []

//1
function getPairs(students){    
    for (let i= 0; i<students.length; i++){
        if (students[i].endsWith("а")) {
            girls.push(students[i])
        } else {
            boys.push(students[i])
        }
    }
    for (let i= 0; i < girls.length; i++){
        pairs.push([boys[i], girls[i]])
    }
        return pairs;   
}
let studPairs = (getPairs(students))
console.log(studPairs)



//2
function getStud(studPairs, themes){
    studPairsThemes = []
    for (let i= 0; i < studPairs.length; i++){
    studPairsThemes.push([studPairs[i].join(' і '), themes[i]])
    }
    return studPairsThemes;    
}
console.log(getStud(studPairs, themes))


//3
function getStudentsMark(students, marks){
    let studMarks = [];
    for (let i=0; i<students.length; i++){
        studMarks.push([students[i], marks[i]])
    }
    return studMarks
}
console.log(getStudentsMark(students, marks));

// 4
function getRandomPairsMarks(){
    let randomStudMarks = [];  
    for (let i=0; i<studPairs.length; i++){
    randomNumber = Math.floor(1 + Math.random() * (5 - 1))
    randomStudMarks.push([studPairsThemes[i], randomNumber]);
}
return randomStudMarks;
}
getRandomPairsMarks()
console.log(getRandomPairsMarks());


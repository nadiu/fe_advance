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

//1
function getSubjects(students){
    let stud = []
    let studSubj =  Object.keys(students.subjects)
    for (let i=0; i<studSubj.length; i++){
        let subject = studSubj[i].charAt(0).toUpperCase() + studSubj[i].slice(1);
        stud.push(subject.replace ('_', ' '))
    }
   return stud;
}
console.log(getSubjects(students[0]))

//2
function getAverageMark(students){
    let sum = 0
    let sumMarks = Object.values(students.subjects)
    let subjSum = [].concat.apply([], sumMarks)
    return (subjSum.reduce((sum, current) => sum + current, 0) / subjSum.length).toFixed(2)
}
console.log(getAverageMark(students[0]))

//3
function getStudentInfo(students){
    let studInfo = {
        course: students.course,
        name: students.name,
        averegeMark: getAverageMark(students)
    }
    return studInfo
}
console.log(getStudentInfo(students[0]))

//4
function getStudentsNames(students){
    let stud = students.map((students) =>(students.name))
    let sorted = stud.sort((a,b) => a.localeCompare(b));
    return sorted
}
console.log(getStudentsNames(students))

//5
function getBestStudent(students){
    let averStud = []
    students.forEach(students => {averStud.push(getAverageMark(students))
    });
    let numb  = Math.max(...averStud)
    let result = Object.values(students.find(students => (getAverageMark(students) == numb)))
    return(result[0])
}
console.log(getBestStudent(students))

//6
function calculateWordLetters(word){
    let result = [];
    let wordLetter = word.split('');
    wordLetter.forEach(letter => result[letter] = result[letter]+1 || 1);
    return result;
}
console.log(calculateWordLetters("тест"))
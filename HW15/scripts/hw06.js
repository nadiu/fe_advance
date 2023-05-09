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

export { getSubjects };
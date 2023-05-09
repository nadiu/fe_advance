const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
let girls = []
let boys = []
let pairs = []
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
// let studPairs = (getPairs(students))

export { getPairs };

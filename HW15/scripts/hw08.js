class Student {
    constructor(university, course, fullName){
        this.course = course;
        this.university = university;
        this.fullName = fullName;
        this._marks = [5, 4, 4, 5];
        this.dismissed = false;  
        this.newMarks = [...this._marks]
    }

    getInfo(){ 
        return (`Студент ${this.course}го курсу ${this.university}, ${this.fullName}`)
    }
}
let stud = new Student("Вищої Школи Психотерапії м.Одеса", 1,"Остап Родоманський Бендер");

export { stud };
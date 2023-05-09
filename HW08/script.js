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
    get marks(){
        if (!this.dismissed){
        return (this._marks);
        } else {
            return null;
        }
    }
    set marks(value){
        if (!this.dismissed){
        this._marks.push(value);
       return this.newMarks = [...this._marks]
        } else {
            return null;
        }
    }
    getAverageMark(){
        if (!this.dismissed){
        for( let i=0; i<this._marks.length; i++){
            return this._marks.reduce((sum, current) => sum + current, 0) / this._marks.length
            }
        } else {
            return null;
        }
    }
    dismiss(){
        this.dismissed = true
        this._marks = null;
    }
    recover(){
        this.dismissed = false;
        this._marks = this.newMarks;
    }
}
let student = new Student("Вищої Школи Психотерапії м.Одеса", 1,"Остап Родоманський Бендер");
console.log(student.getInfo())
console.log(student.marks)
student.marks = 5
console.log(student.marks)
console.log(student.getAverageMark());
student.dismiss();
console.log(student.marks);
student.recover();
console.log(student.marks)


class BudgetStudent extends Student{
    constructor(university, course, fullName) {
        super(university, course, fullName)
        this.setInterval = setInterval(()=>this.getScholarship(), 30000)
    }
    getScholarship(){
        if (student.getAverageMark() >= 4 && !this.dismissed){
            return console.log("Ви отримали 1400 грн. стипендії")
        } 
        else {
            return console.log("Ви не отримали стипендії")
        }
    }
}
let budgetStudent = new BudgetStudent("Вищої Школи Психотерапії м.Одеса", 1,"Остап Родоманський Бендер")


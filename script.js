//complete this code
class Person {
	constructor(name: string,age: number){
		this.name=name;
		this.age=age;
	}
	get name(): string{
		return this.name;
	}
	get age(): number{
		return this.age;
	}
	set age(age: number){
		return this.age;
	}
}

class Student extends Person {
	study(): void{
		console.log(`${this.name} is studying`)
	}
}

class Teacher extends Person {
	teach(): void{
		console.log(`${this.name} is teaching`)
	}
}
const person = new Person("Anju", 25);
console.log(person.name);

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

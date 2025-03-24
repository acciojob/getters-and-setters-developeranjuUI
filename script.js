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

person.age=28;
console.log(person.age);

const student = new Student("Alice", 22);
student.study();

const teacher = new Teacher("Bob", 40);
teacher.teach();

// Do not change the code below this line
(window as any).Person = Person;
(window as any).Student = Student;
(window as any).Teacher = Teacher;

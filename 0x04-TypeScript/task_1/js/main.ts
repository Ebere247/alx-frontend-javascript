// Teacher interface
interface Teacher {
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [key: string]: any
}
// Director interface
interface Directors extends Teacher {
    numberOfReports: number
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return ${firstName[0]}. ${lastName};
}
// student class
interface StudentClassInterface {
    firstName: string,
    lastName: string,
    workOnHomeWork(): string,
    displayName(): string,
}

interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface {
    public firstName: string;
    public lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName
    }

    workOnHomeWork(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}
const student101: StudentClass = new StudentClass("Viv", "Ekpe");
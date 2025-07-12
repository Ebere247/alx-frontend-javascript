// Step 1: Define the interface for the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Step 2: Create the function using that interface
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Step 3: Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: string | number | boolean | undefined;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Task 4: Writing a class

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass("Grace", "Hopper");
console.log(student.displayName());     // Grace
console.log(student.workOnHomework());  // Currently working

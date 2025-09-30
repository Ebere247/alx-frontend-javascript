export namespace Subjects {
  export interface Teacher {
    firstName: string;
    experienceTeachingC?: number;
  }

  // Add a base Subject class
  export class Subject {
    teacher?: Teacher;
  }

  // Cpp extends Subject, not Subjects
  export class Cpp extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      if (
        this.teacher?.experienceTeachingC &&
        this.teacher.experienceTeachingC > 0
      ) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return "No available teacher";
    }
  }
}

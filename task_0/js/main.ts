interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Ebere",
  lastName: "Onuobia",
  age: 28,
  location: "Lagos"
};

const student2: Student = {
  firstName: "Naomi",
  lastName: "Ade",
  age: 25,
  location: "Abuja"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = student.firstName;
  row.appendChild(nameCell);

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  table.appendChild(row);
});

document.body.appendChild(table);


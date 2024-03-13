interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = { 
  firstName: "Adejumo",
  lastName: "Folorunsho",
  age: 27, 
  location: "Remote",
};

const student2: Student = { 
  firstName: "Limbani",
  lastName: "Adebayo",
  age: 30, 
  location: "Mumbasa",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');

studentsList.forEach((student) => {
  const row = document.createElement('tr');
  const firstNameCell = document.createElement('td');
  const locationCell = document.createElement('td');
  
  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);

  document.body.appendChild(table);

});

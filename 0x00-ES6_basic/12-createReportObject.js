export default function createIteratorObject(employeesList) {
  // define method property using ES6 method property syntax
  const reportObject = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employees) {
      return Object.keys(employees).length;
    },
  };

  // Return the report object
  return reportObject;
}

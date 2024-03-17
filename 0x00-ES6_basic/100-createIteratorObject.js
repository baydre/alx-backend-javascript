export default function createIteratorObject(report) {
  const { allEmployees } = report;

  // generator function & delegation (function* - yield*)
  function* iterateEmployees() {
    for (const departmentEmployees of Object.values(allEmployees)) {
      yield* departmentEmployees;
    }
  }

  const iteratorObject = {
    [Symbol.iterator]: iterateEmployees,
  };

  return iteratorObject;
}

/* eslint-disable no-throw-literal */
/* eslint-disable */
// defines the class HolbertonCourse
export default class HolbertonCourse {
  constructor(name, length, students) {
// verify attribute type during object creation
    if (typeof name !== 'string') {
      throw ('The name must be a string');
    }
    if (typeof length !== 'number') {
      throw ('The length must be a number');
    }
    if (!Array.isArray(students) || !students.every(student => typeof student === 'string')) {
      throw ('Students must be an array of strings');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

// getters and setters
  get name() {
    return this._name;
  }
  set name(newName) {
    if (newName !== 'string') {
      throw 'The name must be a string';
    }
    this._name = newName;
  }

  get length() {
    return this._length;
  }
  set length(newLength) {
    if (newLength !== 'number' ) {
      throw 'The length must be a number';
    }
    this._length = newLength;
  }

  get students() {
    return this._students;
  }
  set students(newStudents) {
    if (!Array.isArray(newStudents))
      throw 'The students must be an array';
    if (!newStudents.every(student => typeof student === 'string'))
      throw 'Student must be an array of strings'
    this._students = newStudents;
  }
}

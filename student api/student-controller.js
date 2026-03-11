let students = require("../models/studentModel");

// GET /students
exports.getStudents = (req, res) => {
  res.json(students);
};

// POST /students
exports.addStudent = (req, res) => {
  const { name, age } = req.body;

  const newStudent = {
    id: students.length + 1,
    name,
    age
  };

  students.push(newStudent);

  res.status(201).json(newStudent);
};

// DELETE /students/:id
exports.deleteStudent = (req, res) => {
  const id = parseInt(req.params.id);

  students = students.filter(student => student.id !== id);

  res.json({ message: "Student deleted" });
};

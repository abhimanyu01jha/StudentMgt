const Student = require('../models/student');

exports.getStudents = async (req, res) => res.json(await Student.find());

exports.addStudent = async (req, res) => {
  try {
    console.log('Incoming request body:', req.body); 
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
      return res.status(400).json({ message: 'Name, email, and age are required' });
    }

    const student = new Student({ name, email, age });
    const savedStudent = await student.save();

    res.status(201).json(savedStudent);
  } catch (error) {
    res.status(500).json({ message: 'Error adding student', error: error.message });
  }
};


exports.updateStudent = async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(student);
};

exports.deleteStudent = async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};

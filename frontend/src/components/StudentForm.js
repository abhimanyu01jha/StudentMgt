import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "../redux/actions/studentActions";

function StudentForm() {
  const [formData, setFormData] = useState({ name: "", email: "", age: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addStudent(formData));
    setFormData({ name: "", email: "", age: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input name="age" value={formData.age} onChange={handleChange} placeholder="Age" required />
      <button type="submit">Add Student</button>
    </form>
  );
}

export default StudentForm;

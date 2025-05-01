import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEditMode, setStudentForEdit } from "../students/studentSlice";

const StudentTable = () => {
  const dispatch = useDispatch();
  const { students, editMode, studentToEdit } = useSelector((state) => state.students);

  useEffect(() => {
    dispatch({ type: "students/fetchStudents" });
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch({ type: "students/deleteStudent", payload: id });
  };

  const handleEdit = (student) => {
    dispatch(setStudentForEdit(student));
    dispatch(setEditMode(true));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{editMode && studentToEdit._id === student._id ? (
                <input type="text" value={studentToEdit.name} onChange={(e) => dispatch(setStudentForEdit({ ...studentToEdit, name: e.target.value }))} />
              ) : student.name}</td>
              <td>{editMode && studentToEdit._id === student._id ? (
                <input type="email" value={studentToEdit.email} onChange={(e) => dispatch(setStudentForEdit({ ...studentToEdit, email: e.target.value }))} />
              ) : student.email}</td>
              <td>{editMode && studentToEdit._id === student._id ? (
                <input type="number" value={studentToEdit.age} onChange={(e) => dispatch(setStudentForEdit({ ...studentToEdit, age: e.target.value }))} />
              ) : student.age}</td>
              <td>
                <button onClick={() => handleEdit(student)}>Edit</button>
                <button onClick={() => handleDelete(student._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button disabled={!editMode} onClick={() => dispatch({ type: "students/updateStudent", payload: studentToEdit })}>Update</button>
    </div>
  );
};

export default StudentTable;

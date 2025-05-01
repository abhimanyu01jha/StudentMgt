import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStudents,
  updateStudent,
  deleteStudent,
} from "../redux/actions/studentActions";

function StudentTable() {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.student.students);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  const handleEdit = (student) => {
    setEditId(student._id);
    setFormData(student);
  };

  const handleUpdate = () => {
    dispatch(updateStudent(formData));
    setEditId(null);
  };

  const handleDelete = (id) => {
    dispatch(deleteStudent(id));
  };

  return (
    <table border={1}>
      <thead>
        <tr>
          <th>Name</th><th>Email</th><th>Age</th><th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((stu) => (
          <tr key={stu._id}>
            <td>
              {editId === stu._id ? (
                <input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              ) : (
                stu.name
              )}
            </td>
            <td>
              {editId === stu._id ? (
                <input
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              ) : (
                stu.email
              )}
            </td>
            <td>
              {editId === stu._id ? (
                <input
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                />
              ) : (
                stu.age
              )}
            </td>
            <td>
              {editId === stu._id ? (
                <button onClick={handleUpdate}>Update</button>
              ) : (
                <button onClick={() => handleEdit(stu)}>Edit</button>
              )}
              <button onClick={() => handleDelete(stu._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;

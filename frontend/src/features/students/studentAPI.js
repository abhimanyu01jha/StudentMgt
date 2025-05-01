import axios from "axios";

const apiUrl = "https://studentmgt-uyev.onrender.com/api/students";

export const fetchStudents = async () => {
  const response = await axios.get(apiUrl);
  return response.data;
};

export const addStudent = async (student) => {
  const response = await axios.post(apiUrl, student);
  return response.data;
};

export const updateStudent = async (student) => {
  const response = await axios.put(`${apiUrl}/${student._id}`, student);
  return response.data;
};

export const deleteStudent = async (id) => {
  await axios.delete(`${apiUrl}/${id}`);
};

import React from "react";
import StudentForm from "./features/students/StudentForm";
import StudentTable from "./features/students/StudentTable";

const App = () => {
  return (
    <div>
      <h1>Student Management</h1>
      <StudentForm />
      <StudentTable />
    </div>
  );
};

export default App;

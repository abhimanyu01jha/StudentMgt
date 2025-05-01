import React from "react";
import './App.css';
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";

function App() {
  return (
    <div>
      <h1>Student Management</h1>
      <StudentForm />
      <StudentTable />
    </div>
  );
}

export default App;


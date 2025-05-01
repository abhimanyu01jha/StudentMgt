import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
  name: "students",
  initialState: {
    students: [],
    editMode: false,
    studentToEdit: {},
  },
  reducers: {
    setEditMode(state, action) {
      state.editMode = action.payload;
    },
    setStudentForEdit(state, action) {
      state.studentToEdit = action.payload;
    },
    // Reducers to update the state after successful API calls
    fetchStudentsSuccess(state, action) {
      state.students = action.payload;
    },
    addStudentSuccess(state, action) {
      state.students.push(action.payload);
    },
    updateStudentSuccess(state, action) {
      const index = state.students.findIndex((student) => student._id === action.payload._id);
      if (index >= 0) {
        state.students[index] = action.payload;
      }
    },
    deleteStudentSuccess(state, action) {
      state.students = state.students.filter((student) => student._id !== action.payload);
    },
  },
});

export const {
  setEditMode,
  setStudentForEdit,
  fetchStudentsSuccess,
  addStudentSuccess,
  updateStudentSuccess,
  deleteStudentSuccess,
} = studentSlice.actions;

export default studentSlice.reducer;

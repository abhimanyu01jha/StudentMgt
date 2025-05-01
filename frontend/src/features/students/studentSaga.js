import { call, put, takeEvery } from "redux-saga/effects";
import { fetchStudents, addStudent, updateStudent, deleteStudent } from "./studentAPI";
import {
  fetchStudentsSuccess,
  addStudentSuccess,
  updateStudentSuccess,
  deleteStudentSuccess,
} from "./studentSlice";

function* fetchStudentsSaga() {
  try {
    const students = yield call(fetchStudents);
    yield put(fetchStudentsSuccess(students));
  } catch (e) {
    console.error("Error fetching students", e);
  }
}

function* addStudentSaga(action) {
  try {
    const newStudent = yield call(addStudent, action.payload);
    yield put(addStudentSuccess(newStudent));
  } catch (e) {
    console.error("Error adding student", e);
  }
}

function* updateStudentSaga(action) {
  try {
    const updatedStudent = yield call(updateStudent, action.payload);
    yield put(updateStudentSuccess(updatedStudent));
  } catch (e) {
    console.error("Error updating student", e);
  }
}

function* deleteStudentSaga(action) {
  try {
    yield call(deleteStudent, action.payload);
    yield put(deleteStudentSuccess(action.payload));
  } catch (e) {
    console.error("Error deleting student", e);
  }
}

export default function* studentSaga() {
  yield takeEvery("students/fetchStudents", fetchStudentsSaga);
  yield takeEvery("students/addStudent", addStudentSaga);
  yield takeEvery("students/updateStudent", updateStudentSaga);
  yield takeEvery("students/deleteStudent", deleteStudentSaga);
}

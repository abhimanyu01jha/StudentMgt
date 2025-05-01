import { takeLatest, put, call, all } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_STUDENTS,
  ADD_STUDENT,
  UPDATE_STUDENT,
  DELETE_STUDENT,
  setStudents,
} from "../actions/studentActions";

const api = axios.create({ baseURL: "http://localhost:5000" });

function* fetchStudentsSaga() {
  const res = yield call(api.get, "/students");
  yield put(setStudents(res.data));
}

function* addStudentSaga(action) {
  yield call(api.post, "/students", action.payload);
  yield call(fetchStudentsSaga);
}

function* updateStudentSaga(action) {
  yield call(api.put, `/students/${action.payload._id}`, action.payload);
  yield call(fetchStudentsSaga);
}

function* deleteStudentSaga(action) {
  yield call(api.delete, `/students/${action.payload}`);
  yield call(fetchStudentsSaga);
}

export default function* studentSagas() {
  yield all([
    takeLatest(FETCH_STUDENTS, fetchStudentsSaga),
    takeLatest(ADD_STUDENT, addStudentSaga),
    takeLatest(UPDATE_STUDENT, updateStudentSaga),
    takeLatest(DELETE_STUDENT, deleteStudentSaga),
  ]);
}

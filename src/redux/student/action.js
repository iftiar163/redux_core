import axios from "axios";
import {
  STUDENT_CREATE_FULFILLED,
  STUDENT_CREATE_PENDING,
  STUDENT_CREATE_REJECTED,
  STUDENT_DATA_FULFILLED,
  STUDENT_DATA_PENDING,
  STUDENT_DATA_REJECTED,
  STUDENT_DELETE_FULFILLED,
  STUDENT_DELETE_PENDING,
  STUDENT_DELETE_REJECTED,
} from "./actionTypes";

// Get Data
export const getStudentData = () => async (dispatch) => {
  try {
    dispatch({ type: STUDENT_DATA_PENDING });
    const response = await axios.get("http://localhost:5050/student");
    dispatch({ type: STUDENT_DATA_FULFILLED, payload: response.data });
  } catch (error) {
    dispatch({ type: STUDENT_DATA_REJECTED });
  }
};

// Student Delete Data
export const deleteStudentData = (id) => async (dispatch) => {
  try {
    dispatch({ type: STUDENT_DELETE_PENDING });
    await axios.delete(`http://localhost:5050/student/${id}`);
    dispatch({ type: STUDENT_DELETE_FULFILLED, payload: id });
  } catch (error) {
    dispatch({ type: STUDENT_DELETE_REJECTED });
  }
};

// Student Data Creat
export const studentDataCreate = (data) => async (dispatch) => {
  try {
    dispatch({ type: STUDENT_CREATE_PENDING });

    await axios.post("http://localhost:5050/student/", data);

    dispatch({ type: STUDENT_CREATE_FULFILLED, payload: data });
  } catch (error) {
    dispatch({ type: STUDENT_CREATE_REJECTED });
  }
};

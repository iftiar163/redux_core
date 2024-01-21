import axios from "axios";
import {
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

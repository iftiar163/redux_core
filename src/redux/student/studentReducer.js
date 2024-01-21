import {
  STUDENT_DATA_FULFILLED,
  STUDENT_DATA_PENDING,
  STUDENT_DATA_REJECTED,
  STUDENT_DELETE_FULFILLED,
  STUDENT_DELETE_PENDING,
  STUDENT_DELETE_REJECTED,
} from "./actionTypes";
import { initValue } from "./initValue";

// Create Student Reducer
const studentReducer = (state = initValue, action) => {
  switch (action.type) {
    case STUDENT_DATA_PENDING:
      return {
        ...state,
        loading: true,
      };

    case STUDENT_DATA_FULFILLED:
      return {
        ...state,
        loading: false,
        student: action.payload,
      };

    case STUDENT_DATA_REJECTED:
      return {
        ...state,
        loading: false,
        error: "Data Connection Failed",
      };

    case STUDENT_DELETE_PENDING:
      return {
        ...state,
        loading: true,
      };

    case STUDENT_DELETE_FULFILLED:
      return {
        ...state,
        loading: false,
        student: state.student.filter((data) => data.id !== action.payload),
        message: "Student Data Deleted",
      };

    case STUDENT_DELETE_REJECTED:
      return {
        ...state,
        loading: false,
        error: "Data Connection Failed",
      };

    default:
      return state;
  }
};

// Export Default
export default studentReducer;

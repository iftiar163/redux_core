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
  STUDENT_UPDATE_FULFILLED,
  STUDENT_UPDATE_PENDING,
  STUDENT_UPDATE_REJECTED,
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

    case STUDENT_CREATE_PENDING:
      return {
        ...state,
        loading: true,
      };

    case STUDENT_CREATE_FULFILLED:
      return {
        ...state,
        loading: false,
        student: [...state.student, action.payload],
        message: "Studnet Data Saved Successfully",
      };

    case STUDENT_CREATE_REJECTED:
      return {
        ...state,
        loading: false,
        error: "Data Creation Failed",
      };

    case STUDENT_UPDATE_PENDING:
      return {
        ...state,
        loading: true,
      };

    case STUDENT_UPDATE_FULFILLED:
      return {
        ...state,
        loading: false,
        message: "Data Update Successfull",
        student: state.student.map((item) => {
          if (item.id == action.payload.id) {
            return action.payload;
          } else {
            return item;
          }
        }),
      };

    case STUDENT_UPDATE_REJECTED:
      return {
        ...state,
        loading: false,
        error: "Data Update Failed",
      };

    default:
      return state;
  }
};

// Export Default
export default studentReducer;

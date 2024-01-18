import { TODO_ADD, TODO_DELETE } from "./actionTypes";

export const createTodo = (todo) => {
  return { type: TODO_ADD, payload: todo };
};

export const deleteTodo = (todo) => {
  return { type: TODO_DELETE, payload: todo };
};

import { TODO_ADD } from "./actionTypes";

export const createTodo = (todo) => {
  return { type: TODO_ADD, payload: todo };
};

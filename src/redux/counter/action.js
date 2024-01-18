import { DECREMENT, INCREMENT } from "./actionType";

export const handleIncrement = () => {
  return { type: INCREMENT };
};

export const handleDecrement = () => {
  return { type: DECREMENT };
};

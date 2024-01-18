import { useDispatch, useSelector } from "react-redux";
import { handleDecrement, handleIncrement } from "../redux/counter/action";

const Counter = () => {
  const { counter } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <h1>{counter}</h1>
      <hr />
      <button onClick={() => dispatch(handleDecrement())}>--</button>
      <button onClick={() => dispatch(handleIncrement())}>++</button>
      <button>RESET</button>
      <button>SET</button>
    </>
  );
};

export default Counter;

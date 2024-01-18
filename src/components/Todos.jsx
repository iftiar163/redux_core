import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo, deleteTodo } from "../redux/todos/actions";

const Todos = () => {
  const { todo } = useSelector((state) => state);
  const [input, setInput] = useState();
  const dispatch = useDispatch();

  const handleTodoCreate = () => {
    dispatch(createTodo(input));
  };

  const handleDeleteTodo = (item) => {
    dispatch(deleteTodo(item));
  };
  return (
    <>
      <div className="container">
        <div className="row my-5 justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h2>Todos</h2>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <button
                    className="btn btn-sm btn-success my-1"
                    onClick={handleTodoCreate}
                  >
                    Add
                  </button>
                </div>
                <hr />
                <div className="todos-list">
                  <ul>
                    {todo.length > 0
                      ? todo.map((item, index) => {
                          return (
                            <li
                              className="d-flex justify-content-between align-middle my-1"
                              key={index}
                            >
                              <h6>{item}</h6>
                              <button
                                className="btn btn-sm btn-danger"
                                onClick={() => handleDeleteTodo(item)}
                              >
                                X
                              </button>
                            </li>
                          );
                        })
                      : "No Data Found"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todos;

import { useDispatch, useSelector } from "react-redux";
import "./Student.css";
import {
  deleteStudentData,
  getStudentData,
  studentDataCreate,
  studentDataUpdate,
} from "../redux/student/action";
import { useEffect, useState } from "react";

const Student = () => {
  const dispatch = useDispatch();

  const { student } = useSelector((state) => state.student);

  //   Handle Student Delete
  const handleStudentDelete = (id) => {
    dispatch(deleteStudentData(id));
  };

  // Input Field Data Handle

  const [input, setInput] = useState({
    name: "",
    roll: "",
    email: "",
    photo: "",
  });

  const [editMode, setEditMode] = useState(false);

  // Handle Input Value
  const handleInputValue = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle Update Data
  const handleUpdateData = (item) => {
    setEditMode(true);
    setInput(item);
  };

  // Handle Studnet Create Data
  const handleStudentCreate = (e) => {
    e.preventDefault();

    if (editMode) {
      dispatch(studentDataUpdate({ id: input.id, data: input }));
      setEditMode(false);
    } else {
      dispatch(studentDataCreate(input));
    }

    setInput({
      name: "",
      roll: "",
      email: "",
      photo: "",
    });
  };

  useEffect(() => {
    dispatch(getStudentData());
  }, []);

  return (
    <>
      {/* Student Data UI Design */}
      <div className="container">
        {/* Student Data Input Field */}

        <div className="row my-5 justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Create Student Data</div>
              <div className="card-body">
                <form onSubmit={handleStudentCreate}>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      placeholder="Name"
                      className="form-control"
                      name="name"
                      value={input.name}
                      onChange={handleInputValue}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      placeholder="Roll"
                      className="form-control"
                      name="roll"
                      value={input.roll}
                      onChange={handleInputValue}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      placeholder="Email"
                      className="form-control"
                      name="email"
                      value={input.email}
                      onChange={handleInputValue}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      placeholder="Photo"
                      className="form-control"
                      name="photo"
                      value={input.photo}
                      onChange={handleInputValue}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <button className="btn btn-sm btn-success">
                      {editMode ? "Update" : "Create"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Table Student Data Content */}
        <div className="row justify-content-center my-5">
          <div className="col-md-10">
            <div className="card">
              <div className="card-header">Student Data</div>
              <div className="card-body">
                <table className="table table-stripped">
                  <thead>
                    <tr className="align-middle">
                      <th>#</th>
                      <th>Photo</th>
                      <th>Name</th>
                      <th>Roll</th>
                      <th>Email</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {student && student?.length > 0
                      ? student.map((item, index) => {
                          return (
                            <tr className="align-middle" key={index}>
                              <td>{index + 1}</td>
                              <td>
                                <img src={item.photo} alt="" />
                              </td>
                              <td>{item.name}</td>
                              <td>{item.roll}</td>
                              <td>{item.email}</td>
                              <td>
                                <button className="btn btn-sm btn-primary">
                                  View
                                </button>
                                <button
                                  className="btn btn-sm btn-info mx-1"
                                  onClick={() => handleUpdateData(item)}
                                >
                                  Eidt
                                </button>
                                <button
                                  className="btn btn-sm btn-danger"
                                  onClick={() => handleStudentDelete(item.id)}
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          );
                        })
                      : "fuck u"}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Student;

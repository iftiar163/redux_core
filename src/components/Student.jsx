import { useDispatch, useSelector } from "react-redux";
import "./Student.css";
import { deleteStudentData, getStudentData } from "../redux/student/action";
import { useEffect } from "react";

const Student = () => {
  const dispatch = useDispatch();

  const { student } = useSelector((state) => state.student);

  //   Handle Student Delete
  const handleStudentDelete = (id) => {
    dispatch(deleteStudentData(id));
  };

  useEffect(() => {
    dispatch(getStudentData());
  }, []);

  return (
    <>
      {/* Student Data UI Design */}
      <div className="container">
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
                                <button className="btn btn-sm btn-info mx-1">
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

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTest } from "./testSlice";
import { useNavigate, Link } from "react-router-dom";
import logoo from "./images/logoo.png";
import Foot from "./footer";
import Sidebar from "./SideBar";

const TestTables = () => {
  const tests = useSelector((state) => state.test.tests);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteTest(id));
  };

  const handleViewQuestionDetails = (testId) => {
    navigate(`/view-questions/${testId}`);
  };

  const handleViewParticipents = () => {
    navigate("/userList");
  };

  const handleCancel = () => {
    navigate("/admin");
  };

  return (
    <div>
      <div className="vq" style={{ backgroundColor: "#024a50c2" }}>
        <div className="d-flex justify-content-between align-items-center p-3">
          <div className="d-flex align-items-center" style={{ width: "70%" }}>
            <img
              src={logoo}
              style={{ width: "100px" }}
              alt="Logo"
              className="mr-2"
            />
            <h3 className="mr-4 text-light">Online Assessment</h3>
          </div>
          <div className="creates">
            <ul className="list-unstyled">
              <li style={{ marginRight: "30px" }}>
                <Link
                  className="fs-4 text-light fw-bold"
                  style={{ textDecoration: "none" }}
                  onClick={handleCancel}
                >
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="">
        <div className="row">
          <div className="col-md-3">
            <Sidebar /> {/* Sidebar included */}
          </div>
          <div className="col-md-9">
            <div className="table-responsive">
              <table className="table table-bordered table-hover mt-4 p-4">
                <thead >
                  <tr>
                    <th className="bg-secondary text-light p-3">Title Name</th>
                    <th className="bg-secondary text-light p-3">Categories</th>
                    <th className="bg-secondary text-light p-3">Date</th>
                    <th className="bg-secondary text-light p-3">Total Marks</th>
                    <th className="bg-secondary text-light p-3">View Test</th>
                    <th className="bg-secondary text-light p-3">View Participants</th>
                    <th className="bg-secondary text-light p-3">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3">Programming Quiz</td>
                    <td className="p-3">HTML</td>
                    <td className="p-3">2024-09-10</td>
                    <td className="p-3">10</td>
                    <td className="p-3">
                      <button
                        className="btn btn-primary btn-sm p-3 pt-2 pb-2"
                        type="button"
                        onClick={() => handleViewQuestionDetails(test.id)}
                      >
                        View Details
                      </button>
                    </td>
                    <td className="p-3">
                      <button
                        className="btn btn-primary btn-sm p-3 pt-2 pb-2"
                        type="button"
                        onClick={() => handleViewParticipents()}
                      >
                        View Participant
                      </button>
                    </td>
                    <td className="p-3">
                      <button
                        className="btn btn-danger btn-sm p-3 pt-2 pb-2"
                        type="button"
                        onClick={() => handleDelete(test.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3">Verbal Quiz</td>
                    <td className="p-3">Nouns</td>
                    <td className="p-3">2024-12-19</td>
                    <td className="p-3">20</td>
                    <td className="p-3">
                      <button
                        className="btn btn-primary btn-sm p-3 pt-2 pb-2"
                        type="button"
                        onClick={() => handleViewQuestionDetails(test.id)}
                      >
                        View Details
                      </button>
                    </td>
                    <td className="p-3">
                      <button
                        className="btn btn-primary btn-sm p-3 pt-2 pb-2"
                        type="button"
                        onClick={() => handleViewParticipents()}
                      >
                        View Participant
                      </button>
                    </td>
                    <td className="p-3">
                      <button
                        className="btn btn-danger btn-sm p-3 pt-2 pb-2"
                        type="button"
                        onClick={() => handleDelete(test.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>

                  {tests.length > 0 ? (
                    tests.map((test) => (
                      <tr key={test.id}>
                        <td className="p-3">{test.title}</td>
                        <td className="p-3">{test.category}</td>
                        <td className="p-3">{test.date}</td>
                        <td className="p-3">{test.totalMark}</td>
                        <td className="p-3">
                          <button
                            className="btn btn-primary"
                            onClick={() => handleViewQuestionDetails(test.id)}
                          >
                            View Details
                          </button>
                        </td>
                        <td className="p-3">
                          <button
                            className="btn btn-primary"
                            onClick={() => handleViewParticipents()}
                          >
                            View Participant
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleDelete(test.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                     
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Foot />
    </div>
  );
};

export default TestTables;

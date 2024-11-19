import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTest } from "./testSlice";
import { useNavigate } from "react-router-dom";
import logoo from "./images/logoo.png";
import Foot from "./footer";
const TestTables = () => {
  const tests = useSelector((state) => state.test.tests);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteTest(id));
  };

  const handleViewQuestionDetails = (testId) => {
    console.log(`Navigating to /view-questions/${testId}`);
    navigate("/VQ");
  };
  const handleViewParticipents = () => {
    console.log(`Navigating to /view-questions/`);
    navigate("/userList");
  };
  const handleCancel=()=>{
    navigate("/admin");
  }
  return (
    <div>
       <div className="vq col-md-6" style={{ backgroundColor: '#024a50c2' }}>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center" style={{ width: "70%" }}>
            <img
              src={logoo}
              style={{ width: "100px" }}
              alt="Logo"
              className="mr-2"
            />
            <h3 className="mr-4 text-light ">Online Assessment</h3>
          </div>
          <div className="creates">
            <ul className="list-unstyled ">
              <li style={{ marginRight: '30px' }}>
                <button className="" style={{ width: "100%" }} onClick={handleCancel}>Home</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <center>
        <div>
          <table style={{ marginTop: "30px" }}>
            <thead>
              <tr id="rb">
                <th id="low">Title name</th>
                <th id="low">Categories</th>
                <th id="low">Date</th>
                <th id="low">Total mark</th>
                <th id="hits">View test</th>
                <th id="hits">View participants</th>
                <th id="hits">Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td id="tcc" style={{ backgroundColor: "gainsboro" }}>
                  Programming Quiz
                </td>
                <td id="tcc1" style={{ backgroundColor: "gainsboro" }}>
                  HTML
                </td>
                <td id="tcc2" style={{ backgroundColor: "gainsboro" }}>
                  2024-09-10
                </td>
                <td id="tcc3" style={{ backgroundColor: "gainsboro" }}>
                  10
                </td>
                <td id="rb">
                  <button
                    className="fw-normal text-light"
                    type="button"
                    onClick={() => handleViewQuestionDetails(test.id)}
                    style={{
                      backgroundColor: "blue",
                      width: "",
                      height: "60%",
                      borderRadius: "5px",
                    }}
                  >
                    View Details
                  </button>
                </td>
                <td id="rb">
                  <button
                    className="fw-normal text-light"
                    type="button"
                    style={{
                      backgroundColor: "blue",
                      width: "",
                      height: "60%",
                      borderRadius: "5px",
                    }}
                    onClick={() => handleViewParticipents()}
                  >
                    View participant
                  </button>
                </td>
                <td id="rb">
                  <button
                    className="fw-normal text-light"
                    style={{
                      backgroundColor: "red",
                      width: "",
                      height: "60%",
                      borderRadius: "5px",
                    }}
                    onClick={() => handleDelete(test.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td id="tcc" style={{ backgroundColor: "gainsboro" }}>
                  Verbal Quiz
                </td>
                <td id="tcc1" style={{ backgroundColor: "gainsboro" }}>
                  Nouns
                </td>
                <td id="tcc2" style={{ backgroundColor: "gainsboro" }}>
                  2024-12-19
                </td>
                <td id="tcc3" style={{ backgroundColor: "gainsboro" }}>
                  20
                </td>
                <td id="rb">
                  <button
                    className="fw-normal text-light"
                    type="button"
                    onClick={() => handleViewQuestionDetails(test.id)}
                    style={{
                      backgroundColor: "blue",
                      width: "",
                      height: "60%",
                      borderRadius: "5px",
                    }}
                  >
                    View Details
                  </button>
                </td>
                <td id="rb">
                  <button
                    className="fw-normal text-light"
                    type="button"
                    style={{
                      backgroundColor: "blue",
                      width: "",
                      height: "60%",
                      borderRadius: "5px",
                    }}
                    onClick={() => handleViewParticipents()}
                  >
                    View participant
                  </button>
                </td>
                <td id="rb">
                  <button
                    className="fw-normal text-light"
                    style={{
                      backgroundColor: "red",
                      width: "",
                      height: "60%",
                      borderRadius: "5px",
                    }}
                    onClick={() => handleDelete(test.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
              {tests.length > 0 ? (
                tests.map((test) => (
                  <tr key={test.id}>
                    <td id="tcc" style={{ backgroundColor: "gainsboro" }}>
                      {test.title}
                    </td>
                    <td id="tcc1" style={{ backgroundColor: "gainsboro" }}>
                      {test.category}
                    </td>
                    <td id="tcc2" style={{ backgroundColor: "gainsboro" }}>
                      {test.date}
                    </td>
                    <td id="tcc3" style={{ backgroundColor: "gainsboro" }}>
                      {test.totalMark}
                    </td>
                    <td id="rb">
                      <button
                        className="fw-normal text-light"
                        type="button"
                        onClick={() => handleViewQuestionDetails(test.id)}
                        style={{
                          backgroundColor: "blue",
                          width: "",
                          height: "60%",
                          borderRadius: "5px",
                        }}
                      >
                        View Details
                      </button>
                    </td>
                    <td id="rb">
                      <button
                        className="fw-normal text-light"
                        type="button"
                        style={{
                          backgroundColor: "blue",
                          width: "",
                          height: "60%",
                          borderRadius: "5px",
                        }}
                        onClick={() => handleViewParticipents()}
                      >
                        View participant
                      </button>
                    </td>
                    <td id="rb">
                      <button
                        className="fw-normal text-light"
                        style={{
                          backgroundColor: "red",
                          width: "",
                          height: "60%",
                          borderRadius: "5px",
                        }}
                        onClick={() => handleDelete(test.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7">No tests available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </center>
      <Foot/>
    </div>
  );
};

export default TestTables;

import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Assuming you put your styles in App.css
import Foot from './footer';
import logoo from "./images/logoo.png";
import Side from './side';
import { Button } from 'react-bootstrap'; // Ensure react-bootstrap is installed

const AssessmentTable = () => {
  const navigate = useNavigate();
  const tests = useSelector((state) => state.test.tests);

  const setAttend = () => {
    navigate('/res');
  };

  const onUser = () => {
    navigate('/user');
  };

  return (
    <>
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
                <p
                  className="fs-4 text-light fw-bold"
                  style={{ textDecoration: "none" }}
                  // onClick={handleCancel}
                >
                  Quiz&nbsp;books
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
     
        <div className="row">
          <div className="col-md-3">
            <Side /> {/* Sidebar included */}
          </div>
          <div className="col-md-9 mt-5"> 
      {/* <div className=" "> */}
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead>
              <tr className="table-secondary">
                <th className="bg-secondary text-light p-3">Title name</th>
                <th className="bg-secondary text-light p-3">Categories</th>
                <th className="bg-secondary text-light p-3">Date</th>
                <th className="bg-secondary text-light p-3">Total mark</th>
                <th className="bg-secondary text-light p-3">Attend</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3">Programming Quiz</td>
                <td className="p-3">Subject</td>
                <td className="p-3">2024-08-16</td>
                <td className="p-3">10</td>
                <td>
                  <Button 
                    variant="primary"
                    className="w-100"
                    onClick={setAttend}
                  >
                    Result
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="p-3">Verbal Quiz</td>
                <td className="p-3">Subject</td>
                <td className="p-3">2024-10-10</td>
                <td className="p-3">10</td>
                <td>
                  <Button 
                    variant="primary"
                    className="w-100"
                    onClick={setAttend}
                  >
                Result
                  </Button>
                </td>
              </tr>
              {tests.length > 0 ? (
                tests.map((test) => (
                  <tr key={test.id}>
                    <td className="p-3">{test.title}</td>
                    <td className="p-3">{test.category}</td>
                    <td className="p-3">{test.date}</td>
                    <td className="p-3">{test.totalMark}</td>
                    <td>
                      <Button 
                        variant="primary"
                        className="w-100"
                        onClick={setAttend}
                      >
                    Result
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">No tests available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      </div>
      <Foot />
    </>
   
  );
};

export default AssessmentTable;

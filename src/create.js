import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./SideBar"; // Import Sidebar component
import Foot from "./footer";
import c from "./images/c.png";
import engi from "./images/ece.jpg";
import ver from "./images/Non-Verbal-Reasoning.png";
import plus from "./images/plusbutton_87904-removebg-preview.png";
import "./profile.css"; // Import existing styles
import PieChart from "./PieChart";
import { useSelector, useDispatch } from "react-redux";
import { deleteTest } from "./testSlice";
// import { useNavigate } from "react-router-dom";
import logoo from "./images/logoo.png";
// import Foot from "./footer";
import TestCard from "./TestCard";
// import { Button } from "react-bootstrap";
const AnotherAdminPage = () => {
  const [showLogoutModal, setShowLogoutModal] = React.useState(false);
  const navigate = useNavigate();

  const handleLogoutClick = () => setShowLogoutModal(true);
  const handleCloseModal = () => setShowLogoutModal(false);
  const handleCreateTestClick = () => {
    navigate("/createform");
  };
  const tests = useSelector((state) => state.test.tests);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

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

  const handleCancel = () => {
    navigate("/admin");
  };
  return (
    <>
      <Modal show={showLogoutModal} onHide={handleCloseModal} centered>
        <Modal.Body>
          <p>Are you sure you want to logout?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <a href="1.dashboard.html" className="btn btn-primary">
            Log out
          </a>
        </Modal.Footer>
      </Modal>
      <div className="vq" style={{ backgroundColor: "#024a50c2" }}>
        <div className="d-flex justify-content-between align-items-center p-3">
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
              <li style={{ marginRight: "30px" }}>
                <p
                  className="fs-4 text-light fw-bold" style={{textDecoration:'none'}}
                  onClick={handleCancel}
                >
                  Quiz&nbsp;books
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>

          <div className="col-md-9">
          
            <div className="d-flex justify-content-around align-items-center text-center mt-4">
              <div className="">
                <h5 className="card-title text-decoration-underline">Welcome to Online Assessment</h5>
              </div>
              <div>
                <Button>
                  {" "}
                  <Link
                    to="/createform"
                    className="text-light fs-4 text-decoration-none"
                  >
                    <span className=" fw-bold">+&nbsp;</span>Create Test
                  </Link>
                </Button>
              </div>
              {/* < Link to="/createform" className="nav-link text-light">Create Test</Link> */}
            </div>
            <div className="d-flex flex-wrap justify-content-between mt-4">
              <div
                className="mb-3 m-3"
                style={{ width: "100%", maxWidth: "500px" }}
              >
                <div className="create-card card p-3">
                  <h5 className="card-title mb-2">Programming</h5>
                  <p className="card-text mb-3">
                    <strong>Category:</strong> HTML
                  </p>
                  <p className="card-text mb-3">
                    <strong>Date:</strong> 2024-07-14
                  </p>
                  <p className="card-text mb-3">
                    <strong>Total Marks:</strong> 10
                  </p>
                  <div className="d-flex justify-content-around">
                    <Button
                      variant="primary"
                      style={{ flex: "", margin: "0 2px" }}
                      // onClick={() => onViewDetails(test.id)}
                    >
                      View Details
                    </Button>
                    <Button
                      variant="secondary"
                      style={{ flex: "", margin: "0 2px" }}
                      // onClick={() => onViewParticipants()}
                    >
                      View Participants
                    </Button>
                    <Button
                      variant="danger"
                      style={{ flex: "", margin: "0 2px" }}
                      // onClick={() => onDelete(test.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>

              <div
                className=" mb-3 m-3"
                style={{ width: "100%", maxWidth: "500px" }}
              >
                <div className="create-card card p-3">
                  <h5 className="card-title mb-2">Programming</h5>
                  <p className="card-text mb-3">
                    <strong>Category:</strong> HTML
                  </p>
                  <p className="card-text mb-3">
                    <strong>Date:</strong> 2024-07-14
                  </p>
                  <p className="card-text mb-3">
                    <strong>Total Marks:</strong> 10
                  </p>
                  <div className="d-flex justify-content-around">
                    <Button
                      variant="primary"
                      style={{ flex: "", margin: "0 2px" }}
                      // onClick={() => onViewDetails(test.id)}
                    >
                      View Details
                    </Button>
                    <Button
                      variant="secondary"
                      style={{ flex: "", margin: "0 2px" }}
                      // onClick={() => onViewParticipants()}
                    >
                      View Participants
                    </Button>
                    <Button
                      variant="danger"
                      style={{ flex: "", margin: "0 2px" }}
                      // onClick={() => onDelete(test.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
              {tests.length > 0 ? (
                tests.map((test) => (
                  <TestCard
                    key={test.id}
                    test={test}
                    onViewDetails={handleViewQuestionDetails}
                    onViewParticipants={handleViewParticipents}
                    onDelete={handleDelete}
                  />
                ))
              ) : (
                <p></p>
              )}
            </div>
            <section className="container-fluid mt-4">
              <div className="col-md-14">
                <div className="middle-part">
                  {/* <div className="mp-all">
                    <a>
                      <img src={plus} alt="" onClick={handleCreateTestClick} style={{ width: '70%' }} />
                    </a>
                    <h1 className="mt-2 fs-6">Create Test</h1>
                  </div> */}
                  {/* <div className="mp-all">
                    <a href="#">
                      <img src={ver} alt="" style={{ width: '70%' }} />
                    </a>
                    <h1 className="mt-3 fs-6">Non-Verbal-Reasoning</h1>
                  </div>
                  <div className="mp-all">
                    <img src={c} alt="" style={{ width: '70%' }} />
                    <h1 className="mt-3 fs-6">C</h1>
                  </div>
                  <div className="mp-all">
                    <img src={engi} alt="" style={{ width: '70%' }} />
                    <h1 className="mt-3 fs-6">Engineering</h1>
                  </div> */}
                </div>
              </div>
            </section>
            <PieChart />
          </div>
        </div>
      </div>
      <Foot />
    </>
  );
};

export default AnotherAdminPage;

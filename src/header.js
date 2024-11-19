import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Modal, Button as BootstrapButton } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import logoo from "./images/logoo.png";
import Button from "./button";

import Log from "./login"; // Import the Log component

function Header({ isAdminPage, iscreateForm, isuserPage, isResult }) {
  const location = useLocation();
  const isLogin = location.pathname === "/login";
  const navigate = useNavigate();

  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false); // State for login modal

  const handleLogoutClick = () => setShowLogoutModal(true);
  const handleCloseLogoutModal = () => setShowLogoutModal(false);
  const handleConfirmLogout = () => {
    console.log("User logged out");
    setShowLogoutModal(false);
    navigate("/"); // Redirect to login page after logout
  };

  const setProfile = () => {
    console.log("Navigating to Adminpage");
    navigate("/Adminpage");
  };

  const handleCreateTestClick = () => {
    if (iscreateForm) {
      navigate("/admin"); // Adjust based on where you want to go
    } else {
      navigate("/"); // Navigate to home
    }
  };

  const setUserpage = () => {
    navigate("/user");
  };

  const handleResult = () => {
    navigate("/user");
  };

  const renderLinks = () => {
    if (isLogin) return null;

    return (
      <>
        {!isAdminPage && !iscreateForm && !isuserPage && !isResult && (
          <>
            <Nav.Item id="home">
              <Link className="nav-link fs-4 m-1" to="/">Home</Link>
            </Nav.Item>
            <Nav.Item>
              <a className="nav-link m-2" href="#about">About</a>
            </Nav.Item>
            <Nav.Item>
              <a className="nav-link m-2" href="#pric">Prices</a>
            </Nav.Item>
            <Nav.Item>
              <a className="nav-link m-2" href="#contact">Contact</a>
            </Nav.Item>
          </>
        )}
        {isAdminPage && (
          <>
            <Nav.Item id="home">
              <Link className="nav-link text-light fs-4 m-1" to="/">Home</Link>
            </Nav.Item>
            <NavDropdown className="text-light fs-4 m-2" title={<><i className="fa-solid fa-user"></i> Profile</>}>
              <NavDropdown.Item onClick={setProfile} style={{ textDecoration: "none", color: "rgb(0, 101, 68)" }}>
                View Profile
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleLogoutClick} style={{ color: "rgb(0, 101, 68)" }}>
                Log out
              </NavDropdown.Item>
            </NavDropdown>
          </>
        )}
        {iscreateForm && (
          <Nav.Item id="home" onClick={handleCreateTestClick}>
            <Link className="nav-link text-light fs-4 m-1" to="/">Home</Link>
          </Nav.Item>
        )}
        {isuserPage && (
          <>
            <Nav.Item id="home" onClick={setUserpage}>
              <Link className="nav-link text-light fs-4 m-1" to="/">Home</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link m-2" onClick={handleLogoutClick}>Log out</Link>
            </Nav.Item>
          </>
        )}
        {isResult && (
          <Nav.Item id="home" onClick={handleResult}>
            <Link className="nav-link text-light fs-4 m-1" to="/">Home</Link>
          </Nav.Item>
        )}
      </>
    );
  };

  return (
    <>
      <Navbar expand="md" style={{ width: "100%"}} className="navvv d-flex justify-content-between">
        <Navbar.Brand className="d-flex align-items-center" style={{ width: "70%" }}>
          <img src={logoo} style={{ width: "100px" }} alt="Logo" className="mr-2" />
          <h3 className="mr-4 text-light">Online Assessment</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ border: "2px solid lightgray" }}/>
        <Navbar.Collapse id="basic-navbar-nav" className="vna">
          <Nav className="ms-auto">
            {renderLinks()}
            {!isAdminPage && !iscreateForm && !isuserPage && !isResult && (
              <Nav.Item className="vna">
                <Link className="nav-link m-2" onClick={() => setShowLoginModal(true)}>
                 Login
                </Link>
              </Nav.Item>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={showLogoutModal} onHide={handleCloseLogoutModal}>
        <Modal.Body>Are you sure you want to log out?</Modal.Body>
        <Modal.Footer>
          <BootstrapButton variant="secondary" onClick={handleCloseLogoutModal}>Cancel</BootstrapButton>
          <BootstrapButton variant="primary" onClick={handleConfirmLogout}>Logout</BootstrapButton>
        </Modal.Footer>
      </Modal>

      {/* Login Modal */}
      
      <Modal show={showLoginModal} onHide={() => setShowLoginModal(false)} centered >
        {/* <Modal.Header >
         <Modal.Title className="text-center d-flex justify-content-center">Log in</Modal.Title> 
        </Modal.Header> */}
        <div style={{backgroundColor:'lightgray'}}>
        <Modal.Body >
          <Log onClose={() => setShowLoginModal(false)} />
        </Modal.Body></div>
      </Modal>
      
    </>
  );
}

export default Header;

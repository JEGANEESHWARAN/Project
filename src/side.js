import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './sidebar.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const Side = () => {
  const [showModal, setShowModal] = useState(false);
const navigate=useNavigate();
  const handleLogoutClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmLogout = () => {
    navigate('/');
    // Logic for logging out, such as clearing session or token
    // window.location.href = "/logout"; // Redirect to logout URL
  };

  return (
    <>
      <nav className="sidebar">
        {/* <h2 className="text-light">Admin Menu</h2> */}
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/user" className="nav-link text-light">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link to="/AssessmentTable" className="nav-link text-light">My Test</Link>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-light">Feedback</a>
          </li>
          <li className="nav-item">
          <Link to="#" className="nav-link text-light">Settings</Link>
          </li>
          <li className="nav-item">
          <Link to="/ProfileUser" className="nav-link text-light">My Account</Link>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-light" onClick={handleLogoutClick}>Logout</a>
          </li>
        </ul>
      </nav>

      {/* Bootstrap Modal */}
      <div className={`modal fade ${showModal ? 'show d-block' : ''}`} tabIndex="-1" role="dialog" aria-labelledby="logoutModalLabel" aria-hidden="true" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            
            <div className="modal-body text-center">
              <p>Are you sure you want to logout?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Cancel</button>
              <button type="button" className="btn btn-primary" onClick={handleConfirmLogout}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Side;

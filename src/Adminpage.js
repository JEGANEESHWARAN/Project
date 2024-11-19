import React from 'react';
import { Link } from 'react-router-dom';
import Foot from './footer';
import us from "./images/us.jpg";
import Sidebar from './SideBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoo from "./images/logoo.png";

const Admin = () => {
  return (
    <>
     <div className="vq" style={{ backgroundColor: '#024a50c2' }}>
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
              <li style={{ marginRight: '30px' }}>
                <Link className='fs-4 text-light fw-bold' style={{textDecoration:'none'}} to={'/admin'}>Home</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='row'>
    <div className="col-md-3">
            <Sidebar />
          </div>
      {/* <header className="bg-dark">
        <div className="container">
          <div className="row py-3">
            <div className="col-md-6">
              <div className="d-flex align-items-center">
                <img src="./images/logoo.png" alt="Logo" className="mr-2" style={{ height: '50px' }} />
                <h3 className="text-white mb-0">Online Assessment</h3>
              </div>
            </div>
            <div className="col-md-6">
              <ul className="nav justify-content-end">
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/createadmin">HOME</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="#">Requests</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="#">Study</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="#">Settings</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header> */}

      <section className=" col-md-9 container mt-4 mb-5">
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header bg-info text-white">
                <h5 className="mb-0">User details</h5>
              </div>
              <div className="">
                <div className="row">
                  <div className="col-md-4">
                    <img src={us} alt="User Image" style={{width:'300px'}} className="img-fluid rounded" />
                  </div>
                  <div className="col-md-8">
                    <p><strong>Name:</strong> Admin</p>
                    <p><strong>Email:</strong> admin@gmail.com</p>
                    <h5 className="mt-4 mb-3">Statistics</h5>
                    <p><strong>Tests created:</strong> 5</p>
                    <p><strong>Tests completed in the last 30 days:</strong> 0</p>
                    <p><strong>Tests completed in total:</strong> 0</p>
                    <p><strong>Training tests completed in the last 30 days:</strong> 0</p>
                    <p><strong>Training tests completed in total:</strong> 0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="mt-4">
              <Link className="btn btn-outline-primary btn-block" to="#">All categories | Manage categories</Link>
            </div>
            <div className="mt-4">
              <Link className="btn btn-outline-secondary btn-block" to="/creatercreate">Status All</Link>
            </div>
          </div>
        </div>
      </section>
      
    </div>
    <Foot/>
    </>
  );
};

export default Admin;

import React from 'react';
import { Link } from 'react-router-dom';
import Foot from './footer';
import us from "./images/us.jpg";
import Side from './side';
import logoo from "./images/logoo.png";
import 'bootstrap/dist/css/bootstrap.min.css';

const User = () => {
  return (
    <>
    
    <div className="vq" style={{ backgroundColor: '#024a50c2' }}>
        <div className="d-flex justify-content-between align-items-center p-4">
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
                <p className='fs-4 text-light fw-bold' style={{textDecoration:'none'}} to={'/user'}>Quiz&nbsp;books</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='row'>
    <div className="col-md-3">
            <Side />
          </div>
      <section className=" col-md-9 container mt-4 mb-5">
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header bg-info text-white">
                <h5 className="mb-0">User details</h5>
              </div>
              <div className="card">
                <div className="row">
                  <div className="col-md-4">
                    <img src={us} alt="User Image" className="img-fluid rounded" />
                  </div>
                  <div className="col-md-8">
                    <p><strong>Name:</strong> Jeganeeshwaran s</p>
                    <p><strong>Email:</strong> jegan334@gmail.com</p>
                    <h5 className="mt-4 mb-3">Statistics</h5>
                    <p><strong>Tests attend:</strong> 5</p>
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

export default User;

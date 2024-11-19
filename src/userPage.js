import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Foot from './footer';
import java from "./images/java.jpg";
import c from "./images/c.png";
import cp from "./images/c++.webp";
import react from "./images/ReactJS.jpg";
import verbalres from "./images/verbal-reasoning-x2.png";
import non from "./images/Non-Verbal-Reasoning.png";
import logical from "./images/logical.png";
import AttendUser from './AttendUser';
import PieChart from './PieChart';
import logoo from "./images/logoo.png";
import Side from './side'; // Import the Sidebar component
import QuizCreation from './QuizCreation';
// import PieChart from './PieChart';

const ProfilePage = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.users.currentUser);
  const tests = useSelector((state) => state.test.tests);

  const setAttend = () => {
    navigate('/QuestionPage');
  };

  const onUser = () => {
    navigate('/user');
  };

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
                <h3 className="mr-4 text-light ">Online Assessment</h3>
              </div>
              <div className="creates">
                <ul className="list-unstyled ">
                  <li style={{ marginRight: '30px' }}>
                    <p className='fs-4 text-light fw-bold text-decoration-none' >Quiz&nbsp;books</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
    <div className='row'>
    <div className="col-md-3">
            <Side />
          </div>
      <div className="col-md-9 content flex-grow-1">

        <br />
       <u ><h2 className='fw-bold'>User Dashboard</h2></u>
        <br />
      <u>  <h5>Attend available test</h5></u>
        <div className="container mt-4">
          <div className="row">
            {/* Static test cards */}
            <div className="col-md-4 mb-4">
              <div className="" style={{ width: '100%' }}>
                <div className="create-card card p-4">
                  <h5 className="card-title">Programming Quiz</h5>
                  <p className="card-text">Category: Subject</p>
                  <p className="card-text">Date: 2024-08-16</p>
                  <p className="card-text">Total Mark: 10</p>
                 <AttendUser />
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card" style={{ width: '100%' }}>
                <div className="create-card card p-4">
                  <h5 className="card-title">Verbal Quiz</h5>
                  <p className="card-text">Category: Subject</p>
                  <p className="card-text">Date: 2024-10-10</p>
                  <p className="card-text">Total Mark: 10</p>
                 <AttendUser />
                </div>
              </div>
            </div>

            {/* Dynamic test cards */}
            {tests.length > 0 ? (
              tests.map((test) => (
                <div className="col-md-4 mb-4" key={test.id}>
                  <div className="card" style={{ width: '100%' }}>
                    <div className="create-card card p-4">
                      <h5 className="card-title">{test.title}</h5>
                      <p className="card-text">Category: {test.category}</p>
                      <p className="card-text">Date: {test.date}</p>
                      <p className="card-text">Total Mark: {test.totalMark}</p>
                      <AttendUser />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12">
                <div className="alert alert-info" role="alert">
                  {/* No tests available */}
                </div>
              </div>
            )}
          </div>
        </div>
<u><h5>Partice tests</h5></u>
        <section className="container-fluid mt-4 mb-5">
          <div className="col-md-14">
            {/* <h5 className="card-title">Programming</h5> */}
            <div className="middle-part">
              <div className="mp-all">
                <img src={java} alt="Java" />
                <h1 className="mt-3">JAVA</h1>
                <AttendUser />
              </div>
              <div className="mp-all">
                <img src={c} alt="C" />
                <h1 className="mt-3">C</h1>
                <AttendUser />
              </div>
              <div className="mp-all">
                <img src={non} alt="Non verbal reasoning" />
                <h1 className="mt-3">Non verbal reasoning</h1>
                <AttendUser />
              </div>
              <div className="mp-all">
                <img src={verbalres} alt="Verbal reasoning" />
                <h1 className="mt-3">Verbal reasoning</h1>
                <AttendUser />
              </div>
            </div>
          </div>
        </section>
        <PieChart/>
{/* 
        <section className="container-fluid mt-4">
          <div className="col-md-14">
            <h5 className="card-title">Verbal and Reasoning</h5>
            <div className="middle-part">
              <div className="mp-all">
                <img src={verbalres} alt="Verbal reasoning" />
                <h1 className="mt-3">Verbal reasoning</h1>
              </div>
              <div className="mp-all">
                <img src={non} alt="Non verbal reasoning" />
                <h1 className="mt-3">Non verbal reasoning</h1>
              </div>
              <div className="mp-all">
                <img src={logical} alt="Logical reasoning" />
                <h1 className="mt-3">Logical reasoning</h1>
              </div>
              <div className="mp-all">
                <img src={verbalres} alt="Verbal Ability" />
                <h1 className="mt-3">Verbal Ability</h1>
              </div>
            </div>
          </div>
        </section> */}

        <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="logoutModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body text-center">
                <h5 className="modal-title" id="logoutModalLabel">Are you sure you want to logout?</h5>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <Link to="/logout" className="btn btn-primary">Logout</Link>
              </div>
            </div>
          </div>
        </div>

       
      </div>
      
    </div>
    {/* <QuizCreation/> */}
     <Foot />
     </>
  );
};

export default ProfilePage;

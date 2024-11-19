import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate, useParams,Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Foot from './footer';
import Sidebar from './SideBar'; // Import Sidebar component

const ViewQuestions = () => {
  const { testId } = useParams(); // Retrieve testId from URL parameters

  const questions = useSelector((state) =>
    state.quiz.questions.filter(question => (question.testId) === testId)
  );
  console.log('Filtered questions:', questions); // Debugging

  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // If needed, you can perform actions when the component mounts or updates here.
  }, [questions]);

  const handleSubmitAnswers = () => {
    setShowSubmitModal(false);
    navigate('/userList'); // Redirect after submission
  };

  const handleCancelTest = () => {
    setShowCancelModal(false);
    navigate('/admin'); // Redirect after cancellation
  };

  return (
    <div className=''>
       <div className="vq">
              <div className="d-flex justify-content-between align-items-center mb-3 p-3">
                <div className="quiz">
                  <h2 className='fs-3 fw-bold text-light'>VIEW QUESTIONS</h2>
                </div>
                <div className="creates">
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        variant="link" className='fs-4 text-light fw-bold' style={{textDecoration:'none'}}
                        onClick={() => setShowCancelModal(true)}
                      >
                        Cancel test
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
      
        {/* <div className='col-md-9'> */}
          <div className=''>
           

            <div className="mygod container">
              <h3 className='fs-2'>Questions and Answers</h3>
              <div id="questions-container">
                {questions.length > 0 ? (
                  questions.map((q, index) => (
                    <div className="questions-section" key={index}>
                      <h3>Question {index + 1}: {q.questionText}</h3>
                      <div className="option-container">
                        {q.options.map((option, i) => (
                          <div key={i}>
                            <input
                              type="text"
                              value={option}
                              readOnly
                              className="form-control my-2"
                            />
                          </div>
                        ))}
                        <p className="correct-answer text-success text-center fs-4">Correct Answer: {q.answer}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className='text-light'>No questions available.</p>
                )}
              </div>
            </div>

            <div className='d-flex justify-content-center text-center' style={{ backgroundColor: '' }}>
              {questions.length > 0 && (
                <Button
                  className='text-light bg-primary fs-5 mb-5'
                  variant="link"
                  style={{ textDecoration: 'none' }}
                  onClick={() => setShowSubmitModal(true)}
                >
                  SUBMIT
                </Button>
              )}
            </div>
            <div className='mt-5'>
             
            </div>

            {/* Submit Modal */}
            <Modal show={showSubmitModal} onHide={() => setShowSubmitModal(false)} centered>
              <Modal.Body>
                <p>Are you sure you want to submit your answers?</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowSubmitModal(false)}>No</Button>
                <Button variant="primary" onClick={handleSubmitAnswers}>Yes</Button>
              </Modal.Footer>
            </Modal>

            {/* Cancel Test Modal */}
            <Modal show={showCancelModal} onHide={() => setShowCancelModal(false)} centered>
              <Modal.Body>
                <p>Are you sure you want to cancel the test?</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowCancelModal(false)}>No</Button>
                <Button variant="primary" onClick={handleCancelTest}>Yes</Button>
              </Modal.Footer>
            </Modal>
          </div>
          <Foot/>
        </div>
      // </div>
    
  );
};

export default ViewQuestions;

import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Foot from './footer';

const ViewQuestion = () => {
  const { testId } = useParams(); // Retrieve testId from URL parameters
  const questions = useSelector((state) =>
    state.quiz.questions.filter(question => (question.testId) === testId)
  );
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false); // State for cancel modal
  const [editableQuestions, setEditableQuestions] = useState(questions); // State for editable questions
  const navigate = useNavigate();

  // Handle changes in the input fields
  const handleInputChange = (index, optionIndex, value) => {
    const updatedQuestions = [...editableQuestions];
    updatedQuestions[index].options[optionIndex] = value;
    setEditableQuestions(updatedQuestions);
  };

  const handleSubmitAnswers = () => {
    setShowSubmitModal(false);
    navigate('/userList'); // Redirect after submission
  };

  const handleCancelTest = () => {
    setShowCancelModal(false);
    navigate('/testTable'); // Redirect after cancellation
  };

  return (
    <div className=''>
      <div className="vq col-md-6">
        <div className="d-flex justify-content-between align-items-center">
          <div className="quiz">
            <h2 className='fs-3 fw-bold text-light'>VIEW QUESTIONS</h2>
          </div>
          <div className="creates">
            <ul className="list-unstyled">
              <li>
                <Button
                  variant="link"
                  onClick={() => setShowCancelModal(true)}
                >
                  Home
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mygod container">
        <h3 className='fs-2 mt-2 text-dark'>View and Edit Questions and Answers</h3>
        <div id="questions-container">
        {/* <div className="mygod container"> */}
              
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
      <Foot/>
    </div>
  );
};

export default ViewQuestion;

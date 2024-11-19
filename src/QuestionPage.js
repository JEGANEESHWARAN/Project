import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { selectQuestions } from './quizSlice';

import 'bootstrap/dist/css/bootstrap.min.css';
import './QuestionPage.css'; // Import the CSS file for styling

const QuestionPage = () => {
  const { index } = useParams();
  const navigate = useNavigate();
  const questions = useSelector(selectQuestions);
  const questionIndex = parseInt(index, 10);
  const [selectedOption, setSelectedOption] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showModal, setShowModal] = useState(false);

  if (questionIndex < 0 || questionIndex >= questions.length) {
    return <p>Question not found.</p>;
  }

  const question = questions[questionIndex];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    storeAnswer();
    if (questionIndex < questions.length - 1) {
      navigate(`/question/${questionIndex + 1}`);
    } else {
      calculateScore();
      navigate('/resultPage');
    }
  };

  const handlePrevious = () => {
    if (questionIndex > 0) {
      navigate(`/question/${questionIndex - 1}`);
    }
  };

  const storeAnswer = () => {
    localStorage.setItem(`question-${questionIndex}`, selectedOption);
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    questions.forEach((q, i) => {
      const userAnswer = localStorage.getItem(`question-${i}`);
      if (userAnswer === q.answer) {
        correctAnswers++;
      }
    });
    const totalQuestions = questions.length;
    localStorage.setItem('score', JSON.stringify({ correct: correctAnswers, total: totalQuestions }));
  };

  const handleCancelTest = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmCancel = () => {
    setShowModal(false);
    navigate('/'); // Navigate to the home page or any other page
  };

  return (
    <>
      <div className="vq">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="quiz">
            <h2 className='fs-3 fw-bold text-light'>VIEW QUESTIONS</h2>
          </div>
          <div className="creates">
            <ul className="list-unstyled">
              <li>
                <button
                  className="btn btn-link"
                  onClick={handleCancelTest}
                >
                  Cancel test
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="vq container p-4" style={{ width: '50%' }}>
        <h2 className='text-light'>Question {questionIndex + 1}: {question.questionText}</h2>
        <div className="options-container">
          {question.options.map((option, i) => (
            <div key={i} className="option-item">
              <input
                type="radio"
                name={`question-${questionIndex}`}
                value={option}
                id={`q${questionIndex}-o${i}`}
                checked={selectedOption === option}
                onChange={handleOptionChange}
                className="radio-input"
              />
              <label htmlFor={`q${questionIndex}-o${i}`} className="radio-label">
                {option}
              </label>
            </div>
          ))}
        </div>
        <div className="feedback">
          {feedback && <p>{feedback}</p>}
        </div>
        <div className="d-flex justify-content-between">
          {questionIndex > 0 && (
            <button className="btn btn-secondary" onClick={handlePrevious}>
              PREVIOUS
            </button>
          )}
          <button
            className="btn btn-primary fs-5"
            onClick={handleSubmit}
          >
            {questionIndex < questions.length - 1 ? 'NEXT' : 'SUBMIT'}
          </button>
        </div>
      </div>

      {/* Modal for confirming cancel test */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Cancel</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to cancel the test?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="danger" onClick={handleConfirmCancel}>
            Cancel Test
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default QuestionPage;

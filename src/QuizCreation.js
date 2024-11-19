import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { setQuestions } from './quizSlice';

const QuizCreation = () => {
  const [questions, setLocalQuestions] = useState([{ questionText: '', options: ['', '', '', ''], answer: '' }]);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState({ show: false, index: null });
  const [isAddQuestionClicked, setIsAddQuestionClicked] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Function to handle changes in question inputs
  const handleQuestionChange = (index, field, value) => {
    const newQuestions = [...questions];
    newQuestions[index][field] = value;
    setLocalQuestions(newQuestions);
  };

  // Function to handle changes in option inputs
  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options[optionIndex] = value;
    setLocalQuestions(newQuestions);
  };

  // Function to add a new question
  const addQuestion = () => {
    setLocalQuestions([...questions, { questionText: '', options: ['', '', '', ''], answer: '' }]);
    setIsAddQuestionClicked(true); // Mark that the Add Question button has been clicked
  };

  // Function to delete a question
  const deleteQuestion = (index) => {
    setLocalQuestions(questions.filter((_, qIndex) => qIndex !== index));
    setShowDeleteModal({ show: false, index: null });
  };

  // Validate and save questions
  const saveQuestions = () => {
    const newErrorMessages = [];

    // Validate each question
    const validQuestions = questions.filter((q, qIndex) => {
      const isQuestionTextValid = q.questionText.trim() !== "";
      const areOptionsValid = q.options.every(o => o.trim() !== "");
      const isAnswerValid = q.answer.trim() !== "" && q.options.includes(q.answer.trim());

      // Collect error messages
      if (!isQuestionTextValid) {
        newErrorMessages.push(`Question ${qIndex + 1}: Missing question text.`);
      }
      if (!areOptionsValid) {
        newErrorMessages.push(`Question ${qIndex + 1}: Options are not fully provided.`);
      }
      if (!isAnswerValid) {
        newErrorMessages.push(`Question ${qIndex + 1}: Answer is either missing or not among the provided options.`);
      }

      return isQuestionTextValid && areOptionsValid && isAnswerValid;
    });

    if (validQuestions.length === 0) {
      console.log("No valid questions to save.");
      setErrorMessages(newErrorMessages);
      return;
    }

    console.log("Dispatching questions:", validQuestions); // Debugging
    dispatch(setQuestions(validQuestions));
    setShowSaveModal(true);
  };

  const handleCancelTest = () => {
    setShowCancelModal(false);
    navigate('/admin');
  };

  const handleProceed = () => {
    setShowSaveModal(false);
    navigate('/view-questions');
  };

  return (
    <div>
      <div className="right-contain">
        <div className="q-c">
          <div className="quiz">
            <p>QUIZ CREATION</p>
          </div>
          <div className="create" style={{ border: '2px solid white' }}>
            <a href="#" onClick={(e) => { e.preventDefault(); setShowCancelModal(true); }} >Cancel Test</a>
          </div>
        </div>
      </div>

      <center>
        <div className="bottom">
          <div id="questions-container">
            {questions.map((q, qIndex) => (
              <div className="question-section" key={qIndex}>
                <div className="question-header">
                  <span className="serial-number text-light fs-3">Question {qIndex + 1}</span>
                </div>
                <input
                  type="text"
                  className="question-input"
                  placeholder="Enter Question"
                  value={q.questionText}
                  onChange={(e) => handleQuestionChange(qIndex, 'questionText', e.target.value)}
                />
                <div className="options-container">
                  {q.options.map((o, oIndex) => (
                    <input
                      key={oIndex}
                      type="text"
                      className="option-input"
                      placeholder={`Option ${oIndex + 1}`}
                      value={o}
                      onChange={(e) => handleOptionChange(qIndex, oIndex, e.target.value)}
                    />
                  ))}
                </div>
                <input
                  type="text"
                  className="answer-input"
                  placeholder="Answer"
                  value={q.answer}
                  onChange={(e) => handleQuestionChange(qIndex, 'answer', e.target.value)}
                />
                {/* Show the delete button only if the Add Question button has been clicked */}
                {isAddQuestionClicked && (
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => setShowDeleteModal({ show: true, index: qIndex })}
                    style={{ marginTop: '10px' }}
                  >
                    Delete Question
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </center>

      <div className="next">
        <button id="add-question-btn" onClick={addQuestion}>Add question</button>
        <button onClick={saveQuestions}>Save questions</button>
      </div>

      {/* Cancel Modal */}
      <Modal show={showCancelModal} onHide={() => setShowCancelModal(false)} centered>
        <Modal.Body>
          <p>Are you sure you want to cancel the test?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCancelModal(false)}>No</Button>
          <Button variant="primary" onClick={handleCancelTest}>Yes</Button>
        </Modal.Footer>
      </Modal>

      {/* Save Modal */}
      <Modal show={showSaveModal} onHide={() => setShowSaveModal(false)} centered>
        <Modal.Body>
          <p>Questions saved successfully!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowSaveModal(false)}>Close</Button>
          <Button variant="primary" onClick={handleProceed}>Proceed</Button>
        </Modal.Footer>
      </Modal>

      {/* Error Messages Modal */}
      {errorMessages.length > 0 && (
        <Modal show={true} onHide={() => setErrorMessages([])} centered>
          <Modal.Body>
            <ul>
              {errorMessages.map((message, index) => (
                <li key={index} className="error-message">{message}</li>
              ))}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setErrorMessages([])}>Close</Button>
          </Modal.Footer>
        </Modal>
      )}

      {/* Delete Question Modal */}
      <Modal show={showDeleteModal.show} onHide={() => setShowDeleteModal({ show: false, index: null })} centered>
        <Modal.Body>
          <p>Are you sure you want to delete this question?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal({ show: false, index: null })}>No</Button>
          <Button variant="primary" onClick={() => deleteQuestion(showDeleteModal.index)}>Yes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default QuizCreation;

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { selectQuestions } from './quizSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuestionPage from './QuestionPage';

const AttendUser = () => {
  const questions = useSelector(selectQuestions);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showValidationModal, setShowValidationModal] = useState(false);
  const navigate = useNavigate();

  const handleStartTest = () => {
    if (questions.length > 0) {
      navigate('/question/0');
    }
  };

  return (
    <div className=''>
      
      <div className="container">
        {/* <h3 className='fs-3 '>Start your test</h3> */}
        {questions.length > 0 && (
          <div className=' '>
            <button  className='btn btn-primary'
                  style={{ width: '100%' }}  onClick={handleStartTest}>
              START TEST
            </button>
          
          </div>
        )}
      </div>

      {/* Cancel Modal */}
      <Modal show={showCancelModal} onHide={() => setShowCancelModal(false)} centered>
        <Modal.Body>
          <p>Are you sure you want to cancel the test?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCancelModal(false)}>No</Button>
          <Button variant="primary" onClick={() => { setShowCancelModal(false); navigate('/user'); }}>Yes</Button>
        </Modal.Footer>
      </Modal>

      {/* Submit Modal */}
      <Modal show={showSubmitModal} onHide={() => setShowSubmitModal(false)} centered>
        <Modal.Body>
          <p>Are you sure you want to submit your answers?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowSubmitModal(false)}>No</Button>
          <Button variant="primary" onClick={() => setShowSubmitModal(false)} className="bg-dark">Yes</Button>
        </Modal.Footer>
      </Modal>

      {/* Validation Modal */}
      <Modal show={showValidationModal} onHide={() => setShowValidationModal(false)} centered>
        <Modal.Body>
          <p>Please answer all questions before submitting.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowValidationModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AttendUser;

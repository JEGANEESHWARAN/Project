import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectQuestions } from './quizSlice';
import Foot from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import logoo from "./images/logoo.png";

const Result = () => {
  const questions = useSelector(selectQuestions);
  const userResults = JSON.parse(localStorage.getItem('score')) || { correct: 0, total: 0 };
  const userAnswers = JSON.parse(localStorage.getItem('userAnswers')) || {};
  const [score, setScore] = useState(userResults.correct);
  const [total, setTotal] = useState(userResults.total);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [touchedFields, setTouchedFields] = useState({
    name: false,
    email: false,
    feedback: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserJson = localStorage.getItem('score');
    if (storedUserJson) {
      const storedUser = JSON.parse(storedUserJson);
      setScore(storedUser.correct);
      setTotal(storedUser.total);
    }
  }, []);

  const handleBlur = (field) => {
    setTouchedFields({ ...touchedFields, [field]: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouchedFields({
      name: true,
      email: true,
      feedback: true,
    });

    if (name.trim() === '' || email.trim() === '' || feedback.trim() === '') {
      return;
    }

    console.log('Feedback submitted:', { name, email, feedback });
    navigate('/user');
  };

  const isFieldInvalid = (fieldValue, fieldTouched) => {
    return fieldValue.trim() === '' && fieldTouched;
  };

  return (
    <>
      <div className="vq col-md-6" style={{ backgroundColor: '#024a50c2' }}>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center" style={{ width: "70%" }}>
            <img
              src={logoo}
              style={{ width: "100px" }}
              alt="Logo"
              className="mr-2"
            />
            <h3 className='fs-3 fw-bold text-light'>Online Assessment</h3>
          </div>
          <div className="creates">
            <ul className="list-unstyled">
              <li style={{ marginRight: '30px' }}>
                <button className="" style={{ width: "100%" }} onClick={() => navigate('/AssessmentTable')}>Home</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
     
      <div className="container mt-4">
        <u><h2>Quiz Answers</h2></u>
        {questions.map((q, index) => {
          const selectedAnswer = userAnswers[`question-${index}`];
          const isCorrect = selectedAnswer === q.answer;

          return (
            <div className='d-flex justify-content-around align-item-center' key={index}>
              <div className="questions-section mb-4 " style={{ width: '50%' }}>
                <h4 className="question-text fs-3 mb-3">Question {index + 1}: {q.questionText}</h4>
                <div className="options-container">
                  {q.options.map((option, i) => {
                    const isSelected = selectedAnswer === option;
                    const isOptionCorrect = option === q.answer;

                    // Define inline styles
                    const optionStyle = {
                      marginBottom: '8px',
                      color: isSelected ? (isOptionCorrect ? 'green' : 'red') : (isOptionCorrect ? 'green' : 'inherit'),
                      fontWeight: isSelected || isOptionCorrect ? 'bold' : 'normal'
                    };

                    return (
                      <div key={i} style={optionStyle}>
                        <span>
                          {option}
                        </span>
                        {isOptionCorrect && <span style={{ marginLeft: '8px', color: 'green' }}>(Correct Answer)</span>}
                        {!isOptionCorrect && <span style={{ marginLeft: '8px', color: 'red' }}>(Worng Answer)</span>}
                      </div>
                    );
                  })}
                </div>
                {!isCorrect && selectedAnswer && (
                  <div className="correct-answer mt-2" style={{ fontWeight: 'bold', color: 'green' }}>
                    <strong>Correct Answer:</strong> <span>{q.answer}</span>
                  </div>
                )}
                 {isCorrect && selectedAnswer && (
                  <div className="correct-answer mt-2" style={{ fontWeight: 'bold', color: 'green' }}>
                    <strong>Correct Answer:</strong> <span>{q.answer}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <center>
        <h3 className='mt-4'>Your Result</h3>
        <div className="pppp container result-info fs-3">
          <p className='bg-success text-light text-center'>Your&nbsp;Score: <span>{score}</span></p>
          <p className='bg-secondary text-light'>Out&nbsp;Of: <span>{total}</span></p>
        </div>
      </center>
      <Foot />
    </>
  );
};

export default Result;

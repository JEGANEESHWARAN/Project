// // import React from 'react';
// import { useSelector } from 'react-redux';
// import React, { useEffect, useState } from 'react';
// import { selectQuestions } from './quizSlice';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const ResultAnswer = () => {
//   const questions = useSelector(selectQuestions);
//   const userResults = JSON.parse(localStorage.getItem('user'));
//   const userAnswers = JSON.parse(localStorage.getItem('userAnswers')) || {};
//   const [score, setScore] = useState(0);
//   const [total, setTotal] = useState(0);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [feedback, setFeedback] = useState('');

//   useEffect(() => {
//     const storedUserJson = localStorage.getItem('user');
//     if (storedUserJson) {
//       const storedUser = JSON.parse(storedUserJson);
//       setScore(storedUser.correct);
//       setTotal(storedUser.outof);
//     }
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle feedback form submission here
//     console.log('Feedback submitted:', { name, email, feedback });
//     // Redirect to user.html or handle as needed
//   };
//   return (
//     <div className="container mt-4">
//       <h2>Quiz Results</h2>
//       <center>
//         <h1>Your result</h1>
//       <div className="result-info fs-3" style={{backgroundColor:'#c6c6c6',height:''}}>
//         <p className='bg-success text-light text-center ' style={{}}>Your&nbsp;Score: <span>{userResults.correct}</span></p>
//         <p className='bg-secondary text-light ' style={{}}>Out&nbsp;Of: <span>{userResults.outof}</span></p>
//       </div></center>
//       {questions.map((q, index) => {
//         const selectedAnswer = userAnswers[`question-${index}`];
//         const isCorrect = selectedAnswer === q.answer;

//         return (
//           <div key={index} className="mb-3">
//             <h3>Question {index + 1}: {q.questionText}</h3>
//             <div className="options-container">
//               {q.options.map((option, i) => (
//                 <div
//                   key={i}
//                   className={`option-item ${
//                     selectedAnswer === option
//                       ? isCorrect
//                         ? 'text-success'
//                         : 'text-danger'
//                       : ''
//                   }`}
//                 >
//                   <span className="fw-bold">{option}</span>
//                   {option === q.answer && <span className="ms-2">(Correct Answer)</span>}
//                 </div>
//               ))}
//             </div>
//             {!isCorrect && (
//               <div className="correct-answer mt-2 text-success">
//                 Correct Answer: <span className="fw-bold">{q.answer}</span>
//               </div>
//             )}
//           </div>
//         );
//       })}
//       <section className="feedback-section">
//        <u> <h2>Feedback</h2></u>
//         <form onSubmit={handleSubmit} className="feedback-form">
//           <div className="form-group">
//             <label htmlFor="name">Name</label>
//             <input 
//               type="text" 
//               id="name"
//               required 
//               value={name}
//               onChange={(e) => setName(e.target.value)} 
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input 
//               type="email" 
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)} 
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="feedback">Feedback</label>
//             <textarea 
//               id="feedback"
//               placeholder="Write feedback" 
//               value={feedback}
//               onChange={(e) => setFeedback(e.target.value)} 
//             />
//           </div>
//           <button className='mb-5' id='button' type="submit">Send</button>
//         </form>
//       </section>
//     </div>
//   );
// };

// export default ResultAnswer;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoo from "./images/login-img.jfif";
function Contact() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [formValidated, setFormValidated] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    // Check if the form is valid
    if (form.checkValidity() === false) {
      setError('Please fill out all required fields.');
      setFormValidated(true);
      return;
    }

    // Regular expressions for validation
  

  
  };

  return (
    <div className='container-filud m-0 p-3' id='contact' style={{backgroundColor:'lightgray'}}>
     
      <div className='row justify-content-center align-items-center'>
      <img src={logoo} style={{ width: "530px",height:'90%',borderRadius:'20%' }} alt="Logo" className="mr-2" />
        <div className='col-md-7 col-lg-5 '>
          <img></img>
          <div className='card' style={{boxShadow:'0 0 4px black'}}>
            <div className='card p-3'>
              <h2 className='text-center mb-4'><u>Contact Us</u></h2>
              {error && <p className='text-danger text-center'>{error}</p>}
              <form noValidate validated={formValidated.toString()} onSubmit={handleSubmit}>
                <div className='form-group mb-3'>
                  <label htmlFor='username' className='form-label'>Username</label>
                  <input
                    type='text'
                    id='username'
                    className={`form-control ${formValidated && username === '' ? 'is-invalid' : ''}`}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <div className='invalid-feedback'>Username is required.</div>
                </div>
                <div className='form-group mb-3'>
                  <label htmlFor='email' className='form-label'>Email</label>
                  <input
                    type='email'
                    id='email'
                    className={`form-control ${formValidated && email === '' ? 'is-invalid' : ''}`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <div className='invalid-feedback'>A valid email is required.</div>
                </div>
                <div className='form-group mb-3'>
                  <label htmlFor='topic' className='form-label'>Topic</label>
                  <select
                    id='topic'
                    className={`form-select ${formValidated && topic === '' ? 'is-invalid' : ''}`}
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    required
                  >
                    <option value=''>--select one--</option>
                    <option value='general'>General question</option>
                    <option value='sales'>Sales query</option>
                    <option value='accounts'>Accounts</option>
                    <option value='feedback'>Feedback</option>
                  </select>
                  <div className='invalid-feedback'>Please select a topic.</div>
                </div>
                <div className='form-group mb-3'>
                  <label htmlFor='message' className='form-label'>Question/message</label>
                  <textarea
                    id='message'
                    className='form-control'
                    rows='4'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                  <div className='invalid-feedback'>Message is required.</div>
                </div>
                <div className='d-flex justify-content-center'>
                  <button type='submit' className='btn btn-primary'>Email Us</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

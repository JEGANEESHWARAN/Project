import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useNavigate,Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addTest } from './testSlice'; // Ensure this import path is correct
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './SideBar'; // Import the Sidebar component
import logoo from "./images/logoo.png";
import Foot from "./footer"; // Import the footer component if needed

const CreateTest = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [date, setDate] = useState('');
  const [totalMark, setTotalMark] = useState('');
  const [description, setDescription] = useState('');
  const [validationMessage, setValidationMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false); // State for cancel modal

  // State for validation styles
  const [validationState, setValidationState] = useState({
    title: '',
    category: '',
    subCategory: '',
    totalMark: '',
    date: ''
  });

  const handleSubmit = () => {
    const reg = /^[0-9]{1,5}$/;
    const reg1 = /^[A-Za-z0-9 ]+$/;
    let isValid = true;
    let newValidationState = {
      title: '',
      category: '',
      subCategory: '',
      totalMark: '',
      date: ''
    };

    // Clear previous validation message
    setValidationMessage('');

    // Validation checks
    if (!title) {
      newValidationState.title = 'is-invalid';
      isValid = false;
    } else if (!title.match(reg1)) {
      newValidationState.title = 'is-invalid';
      setValidationMessage("Test Title should only contain alphanumeric characters and spaces.");
      isValid = false;
    }

    if (!category || category === "Select category") {
      newValidationState.category = 'is-invalid';
      isValid = false;
    }

    if (!subCategory) {
      newValidationState.subCategory = 'is-invalid';
      isValid = false;
    }

    if (!date) {
      newValidationState.date = 'is-invalid';
      isValid = false;
    }

    if (!totalMark || !totalMark.match(reg)) {
      newValidationState.totalMark = 'is-invalid';
      isValid = false;
    }

    setValidationState(newValidationState);

    if (isValid) {
      setShowModal(true);
    }
  };

  const handleModalConfirm = () => {
    setShowModal(false);
    const newTest = {
      id: Date.now(),
      title,
      category,
      subCategory,
      date,
      totalMark,
      description
    };
    dispatch(addTest(newTest));
    navigate('/AdminQuizCreate');
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case 'title':
        setTitle(value);
        break;
      case 'category':
        setCategory(value);
        break;
      case 'subCategory':
        setSubCategory(value);
        break;
      case 'date':
        setDate(value);
        break;
      case 'mark':
        setTotalMark(value);
        break;
      case 'description':
        setDescription(value);
        break;
      default:
        break;
    }
    // Update validation state on change
    handleValidation(id, value);
  };

  const handleValidation = (field, value) => {
    let newValidationState = { ...validationState };

    switch (field) {
      case 'title':
        newValidationState.title = value ? /^[A-Za-z0-9 ]+$/.test(value) ? '' : 'is-invalid' : 'is-invalid';
        break;
      case 'category':
        newValidationState.category = value && value !== 'Select category' ? '' : 'is-invalid';
        break;
      case 'subCategory':
        newValidationState.subCategory = value ? '' : 'is-invalid';
        break;
      case 'date':
        newValidationState.date = value ? '' : 'is-invalid';
        break;
      case 'mark':
        newValidationState.totalMark = value && /^[0-9]{1,5}$/.test(value) ? '' : 'is-invalid';
        break;
      default:
        break;
    }

    setValidationState(newValidationState);
  };

  const handleReset = () => {
    setTitle('');
    setCategory('');
    setSubCategory('');
    setDate('');
    setTotalMark('');
    setDescription('');
    setValidationMessage('');
    setValidationState({
      title: '',
      category: '',
      subCategory: '',
      totalMark: '',
      date: ''
    });
  };

  const handleCancel = () => {
    setShowCancelModal(true); // Show cancel confirmation modal
  };

  const confirmCancel = () => {
    setShowCancelModal(false);
    navigate('/admin'); // Navigate to the desired page
  };

  return (
    <>
      <div className="vq" style={{ backgroundColor: '#024a50c2' }}>
        <div className="d-flex justify-content-between align-items-center p-3">
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
                <p className='fs-4 text-light fw-bold' style={{textDecoration:'none'}} onClick={handleCancel}>Quiz&nbsp;books</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3">
          <Sidebar /> {/* Sidebar included */}
        </div>
        <div className="col-md-9" style={{backgroundColor:''}}>
          <div className=''>
            <div className="mt-1">
              <div className="row d-flex justify-content-center">
                <div className="col-md-8">
                  <div className="contentBx mt-4" >
                    <div className="formBx p-4 mb-2" style={{backgroundColor:'lightgray'}}>
                      <Form noValidate  style={{backgroundColor:''}}>
                        <h2 className="text-center text-decoration-underline" style={{color:'#024950'}}>Create Test</h2>
                        {validationMessage && (
                          <p id="test" className="text-center text-danger">
                            {validationMessage}
                          </p>
                        )}
                        <Form.Group className='pt-2 pb-2 p-2 fs-5 fw-bold'>
                          <Form.Label htmlFor="title">Test Title</Form.Label>
                          <Form.Control
                            type="text"
                            id="title"
                            placeholder="Enter test title"
                            value={title}
                            onChange={handleChange}
                            className={validationState.title}
                            style={{
                              borderRadius: '3px', border:'none',
                              borderColor: validationState.title ? 'red' : 'initial'
                            }}
                          />
                          <Form.Control.Feedback type="invalid" className='fw-normal'>
                            Please provide a valid title.
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='pt-2 pb-2 p-2 fs-5 fw-bold'>
                          <Form.Label htmlFor="category">Category</Form.Label>
                          <Form.Control
                            as="select"
                            type='select'
                            id="category"
                            value={category}
                            onChange={handleChange}
                            className={validationState.category}
                            style={{
                              borderRadius: '3px',border:'none',
                              borderColor: validationState.category ? 'red' : 'initial'
                            }}
                          >
                            <option value="">--Select category--</option>
                            <option value="Programming">Programming</option>
                            <option value="Subject">Subject</option>
                            <option value="Verbal">Verbal</option>
                            <option value="Others">Others</option>
                          </Form.Control>
                          <Form.Control.Feedback type="invalid" className='fw-normal'>
                            Please select a category.
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='pt-2 pb-2 p-2 fs-5 fw-bold'>
                          <Form.Label htmlFor="subCategory">Sub Category</Form.Label>
                          <Form.Control
                            type="text"
                            id="subCategory"
                            placeholder="Enter sub category"
                            value={subCategory}
                            onChange={handleChange}
                            className={validationState.subCategory}
                            style={{
                              borderRadius: '3px',border:'none',
                              borderColor: validationState.subCategory ? 'red' : 'initial'
                            }}
                          />
                          <Form.Control.Feedback type="invalid" className='fw-normal'>
                            Please provide a sub category.
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='pt-2 pb-2 p-2 fs-5 fw-bold'>
                          <Form.Label htmlFor="mark">Total Mark</Form.Label>
                          <Form.Control
                          
                            type="text"
                            id="mark"
                            placeholder="Enter total mark"
                            value={totalMark}
                            onChange={handleChange}
                            className={validationState.totalMark}
                            style={{
                              borderRadius: '3px',border:'none',
                              borderColor: validationState.totalMark ? 'red' : 'initial'
                            }}
                          />
                          <Form.Control.Feedback type="invalid" className='fw-normal'>
                            Please enter a valid total mark.
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='pt-2 pb-2 p-2 fs-5 fw-bold'>
                          <Form.Label htmlFor="date">Date</Form.Label>
                          <Form.Control
                            type="date"
                            id="date"
                            value={date}
                            onChange={handleChange}
                            className={validationState.date}
                            style={{
                              borderRadius: '3px',border:'none',
                              borderColor: validationState.date ? 'red' : 'initial'
                            }}
                          />
                          <Form.Control.Feedback type="invalid" className='fw-normal'>
                            Please select a date.
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='pt-2 pb-2 p-2 fs-5 fw-bold'>
                          <Form.Label htmlFor="description">Description <span className='fw-normal fs-6'>(optional)</span></Form.Label>
                          <Form.Control
                            as="textarea"
                            id="description"
                            placeholder="Enter description"
                            rows={4}
                            value={description}
                            onChange={handleChange}
                            style={{ borderRadius: '3px' }}
                          />
                        </Form.Group>
                        <div className="d-flex justify-content-around mt-3">
                         <Button variant="secondary" onClick={handleReset}>RESET</Button>
                          <Button variant="primary" onClick={handleSubmit}>SUBMIT</Button>
                          <Button variant="danger" onClick={handleCancel}>CANCEL</Button>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Body>Are you sure you want to create this test?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
              <Button variant="primary" onClick={handleModalConfirm}>Confirm</Button>
            </Modal.Footer>
          </Modal>

          <Modal show={showCancelModal} onHide={() => setShowCancelModal(false)}>
            <Modal.Body>Are you sure you want to cancel? All unsaved changes will be lost.</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowCancelModal(false)}>No</Button>
              <Button variant="danger" onClick={confirmCancel}>Yes</Button>
            </Modal.Footer>
          </Modal>
        </div>
        <Foot />
      </div>
    </>
  );
};

export default CreateTest;

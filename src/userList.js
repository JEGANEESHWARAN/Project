// UserList.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, Form } from "react-bootstrap";
import { addUser, removeUser, updateUserDetails } from "./userAction";
import { selectUsers } from "./userReducer";
import { useNavigate, Link } from "react-router-dom";
import logoo from "./images/logoo.png";
import Foot from "./footer";
import Sidebar from "./SideBar";
const UserList = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showHomeModal, setShowHomeModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  const validateForm = () => {
    let formErrors = {};

    if (!user.name.trim()) formErrors.name = "Name is required";
    if (!user.email.trim()) formErrors.email = "Email is required";
    if (!user.password.trim()) formErrors.password = "Password is required";

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (user.email && !emailPattern.test(user.email)) {
      formErrors.email = "Email is not valid";
    }

    if (user.password && user.password.length < 8) {
      formErrors.password = "Password must be at least 8 characters long";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };
  const handleCancel = () => {
    navigate("/testTable");
  };
  const handleAddUser = () => {
    if (validateForm()) {
      if (editIndex !== null) {
        dispatch(updateUserDetails(editIndex, user));
        setEditIndex(null);
      } else {
        dispatch(addUser(user));
      }
      setUser({ name: "", email: "", password: "" });
      setShowModal(false);
    }
  };

  const handleEdit = (index) => {
    setUser(users[index]);
    setEditIndex(index);
    setShowModal(true);
  };

  const handleRemove = (index) => {
    dispatch(removeUser(index));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let formErrors = { ...errors };

    switch (name) {
      case "name":
        formErrors.name = value.trim() ? "" : "Name is required";
        break;
      case "email":
        if (!value.trim()) {
          formErrors.email = "Email is required";
        } else {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          formErrors.email = emailPattern.test(value)
            ? ""
            : "Email is not valid";
        }
        break;
      case "password":
        formErrors.password =
          value.length >= 8
            ? ""
            : "Password must be at least 8 characters long";
        break;
      default:
        break;
    }

    setErrors(formErrors);
  };

  return (
    // <div className="">
    <>
    <div className="vq" style={{ backgroundColor: "#024a50c2" }}>
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
              <li style={{ marginRight: "30px" }}>
                <p
                  className="fs-4 text-light fw-bold"
                  style={{ textDecoration: "none" }}
                  onClick={handleCancel}
                >
                  Quiz&nbsp;books
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    <div className="row">
      <div className="col-md-3">
        <Sidebar /> {/* Sidebar included */}
      </div>

      <div className="col-md-9">
      <div className="d-flex align-item-center justify-content-end fs-3 mt-3">
        <Button className="fs-5" onClick={() => setShowModal(true)}>
          + ADD PARTICIPANTS
        </Button>
      </div>
      <div className="table-responsive mb-5">
      <table className="table table-bordered table-hover mt-4">
        <thead>
          <tr>
            <th className="bg-secondary text-light p-3">S.no</th>
            <th className="bg-secondary text-light p-3">Name</th>
            <th className="bg-secondary text-light p-3">Email</th>
            <th className="bg-secondary text-light p-3">Password</th>
            <th className="bg-secondary text-light p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3">1</td>
            <td className="p-3">Jegan</td>
            <td className="p-3">jeganeeshwaransjegan@gmail.com</td>
            <td className="p-3">12345678</td>
            <td className="p-3">
              <Button variant="primary" className="m-2">Edit</Button>
              <Button variant="danger" className="m-2">Delete</Button>
            </td>
          </tr>
          <tr>
            <td className="p-3">2</td>
            <td className="p-3">Sugan</td>
            <td className="p-3">sugansjegan@gmail.com</td>
            <td className="p-3">12345678</td>
            <td className="p-3">
              <Button variant="primary" className="m-2">Edit</Button>
              <Button variant="danger" className="m-2">Delete</Button>
            </td>
          </tr>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={index}>
                <td className="p-3">{index + 3}</td>
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.password}</td>
                <td className="p-3">
                  <Button variant="primary" onClick={() => handleEdit(index)} className="m-2">Edit</Button>
                  <Button variant="danger" onClick={() => handleRemove(index)} className="m-2">Delete</Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">No users available</td>
            </tr>
          )}
        </tbody>
      </table>
</div>
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header>
          <Modal.Title>
            {editIndex !== null ? "Edit User" : "Add User"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="name">Name</Form.Label>
              <Form.Control
                type="text"
                id="name"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Enter name"
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Enter email"
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                type="password"
                id="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Enter password"
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <div className="text-center">
              <Button variant="primary" onClick={handleAddUser}>
                {editIndex !== null ? "Update User" : "Submit"}
              </Button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showHomeModal}
        onHide={() => setShowHomeModal(false)}
        centered
      >
        <Modal.Body>
          <p>
            Are you sure you want to go to the home page? Your changes might not
            be saved.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowHomeModal(false)}>
            No
          </Button>
          <Button variant="primary" onClick={() => navigate("/admin")}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
      
      </div>
      <Foot />
    </div>
    </>
  );
};

export default UserList;

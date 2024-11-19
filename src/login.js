import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUsers } from "./userReducer";

const Log = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [touchedFields, setTouchedFields] = useState({
    email: false,
    password: false,
  });
  const [isCredentialsInvalid, setIsCredentialsInvalid] = useState(false);
  const [loginTime, setLoginTime] = useState(null);
  const navigate = useNavigate();
  const users = useSelector(selectUsers);

  const handleBlur = (field) => {
    setTouchedFields({ ...touchedFields, [field]: true });
  };

  const handleInputChange = (setter, value, field) => {
    setter(value);
    if (message) {
      setMessage("");
    }
    setIsCredentialsInvalid(false);

    setTouchedFields((prevState) => ({
      ...prevState,
      [field]: true,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setTouchedFields({
      email: true,
      password: true,
    });

    if (email.trim() === "" || password.trim() === "") {
      setMessage("Enter valid email/password");
      setIsCredentialsInvalid(true);
      return;
    }

    const adminEmail = "admin@gmail.com";
    const adminPassword = "12345678";

    if (email === adminEmail && password === adminPassword) {
      onClose();
      navigate("/admin");
    } else {
      const foundUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (foundUser) {
        setMessage("");
        onClose();
        navigate(foundUser.role === "admin" ? "/admin" : "/user");
      } else {
        setMessage("Enter valid email/password");
        setIsCredentialsInvalid(true);
      }
    }

    setLoginTime(new Date().toLocaleString());
  };

  const isFieldInvalid = (fieldValue, fieldTouched) => {
    return fieldValue.trim() === "" && fieldTouched;
  };

  return (
    
    <div >
      <div className="d-flex justify-content-end">
       <button
          type="button"
          className="close fs-3 d-flex justify-content-end"
          onClick={onClose}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          &times;
        </button></div>
      <div className="form-header  d-flex justify-content-center align-items-center mb-1" >
        <h3 className=" fw-bold text-decoration-underline" style={{color:'#024950'}}>Login</h3>
      </div>
      <form onSubmit={handleSubmit}>
        {message && (
          <p style={{ color: "red", textAlign: "center" }}>{message}</p>
        )}
        <div className="form-group mb-4 text-dark">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            className={`form-control  ${
              isCredentialsInvalid || 
              isFieldInvalid(email, touchedFields.email)
                ? "is-invalid"
                : ""
            }` }
            value={email}
            onBlur={() => handleBlur("email")}
            onChange={(e) =>
              handleInputChange(setEmail, e.target.value, "email")
            }
          />
          {isFieldInvalid(email, touchedFields.email) && (
            <div className="invalid-feedback">Please provide a valid email.</div>
          )}
        </div>
        <div className="form-group mb-4 text-dark">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className={`form-control ${
              isCredentialsInvalid ||
              isFieldInvalid(password, touchedFields.password)
                ? "is-invalid"
                : ""
            }`}
            value={password}
            onBlur={() => handleBlur("password")}
            onChange={(e) =>
              handleInputChange(setPassword, e.target.value, "password")
            }
          />
          {isFieldInvalid(password, touchedFields.password) && (
            <div className="invalid-feedback">
              Please provide a valid password.
            </div>
          )}
        </div>
        <div className="form-group d-flex justify-content-around">
          <button type="submit" className="btn btn-primary btn-block">
            Login
          </button>
        </div>
        {loginTime && (
          <div className="form-group mt-3">
            <p>Login Time: {loginTime}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Log;

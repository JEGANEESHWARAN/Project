import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import best from "./images/bestpart.webp";
import Log from "./login";
// import "./styles.css"; // Import the CSS styles

function Best() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="best">
      <section className="container text-center py-5" id="best">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={best} alt="Best" className="img-fluid" />
          </div>
          <div className="col-md-6" id="st">
            <h1 className="text-light fs-1">
              The Best Quiz & Test Maker for Education & Business
            </h1>
            <p className="text-light fs-6">
              Make hiring and training tests to get insights on skills and
              knowledge. This tool improves students' knowledge and skills.
            </p>
         <button
              onClick={openModal}
              className=""
              style={{ color: "black" ,width:'100%'}}
            ><a className="btn  btn-lg" >
              Start your test</a>
            </button>
            
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="modal-background">
          <div className="modal-content" style={{backgroundColor:'lightgray'}}>
            {/* <button className="close-button" onClick={closeModal}>
              &times;
            </button> */}
            <Log onClose={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Best;

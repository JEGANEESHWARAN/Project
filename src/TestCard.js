import React from "react";
import { Button } from "react-bootstrap";
import './cardStyle.css';
const TestCard = ({ test, onViewDetails, onViewParticipants, onDelete }) => {
  return (
    <div className="mb-3 m-3" style={{ width: "100%", maxWidth: "500px" }}>
        
      <div className="create-card card p-3">
        <h5 className="card-title">{test.title}</h5>
        <p className="card-text"><strong>Category:</strong> {test.category}</p>
        <p className="card-text"><strong>Date:</strong> {test.date}</p>
        <p className="card-text"><strong>Total Marks:</strong> {test.totalMark}</p>
        <div className="d-flex justify-content-between">
          <Button 
            variant="primary" 
            onClick={() => onViewDetails(test.id)}
          >
            View Details
          </Button>
          <Button 
            variant="secondary" 
            onClick={() => onViewParticipants()}
          >
            View Participants
          </Button>
          <Button 
            variant="danger" 
            onClick={() => onDelete(test.id)}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestCard;

import { useCallback } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../styles/Profile.css";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleOnClick = useCallback(() => navigate('/exercises', {replace: true}), [navigate]);


    return (
      <div className="div-container-row"> 
        <div className="title">
          Dashboard
        </div>
        <div className="exercises-button">
          <Button onClick={handleOnClick}>
            Exercises
          </Button>
        </div>
      </div>
    );
  }
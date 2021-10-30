import "./ReviewFeedback.css";
import { useState } from "react";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";

function ReviewFeedback() {
  const history = useHistory();
  const feedback = useSelector((store) => store.feedback);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Clicked Submit`);
    history.push("/success");
  };

  return (
    <div>
      <h2>Review Your Feedback</h2>

      <ul className="feedbackList">
        <li>Feelings: {feedback.feeling}</li>
        <li>Understanding: {feedback.understanding}</li>
        <li>Support: {feedback.support}</li>
        <li>Comments: {feedback.comment}</li>
      </ul>
      <br />
      <Button onClick={handleSubmit} type="submit" variant="contained">
        Submit
      </Button>
    </div>
  );
}

export default ReviewFeedback;

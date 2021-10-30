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
    // history.push("/success");
  };

  return (
    <div>
      <h2>Review Your Feedback</h2>
      <p>Feelings: {feedback.feeling}</p>
      <br />
      <p>Understanding: {feedback.understanding}</p>
      <br />
      <p>Support: {feedback.support}</p>
      <br />
      <p>Comments: {feedback.comment}</p>
      <br />
      <Button onClick={handleSubmit} type="submit" variant="contained">
        Submit
      </Button>
    </div>
  );
}

export default ReviewFeedback;

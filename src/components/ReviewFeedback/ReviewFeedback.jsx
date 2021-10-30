import "./ReviewFeedback.css";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

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
      <p>Feeling: {feedback[0]}</p>
      <br />
      <p>Understanding: {feedback[1]}</p>
      <br />
      <p>Support: {feedback[2]}</p>
      <br />
      <p>Comments: {feedback[3]}</p>
      <br />
      <Button onClick={handleSubmit} type="submit" variant="contained">
        Submit
      </Button>
    </div>
  );
}

export default ReviewFeedback;

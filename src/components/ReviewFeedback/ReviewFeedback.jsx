import './ReviewFeedback.css'
import Button from "@mui/material/Button";

function ReviewFeedback() {
  return (
    <div>
      <h2>Review Your Feedback</h2>

      <ul className="feedbackList">
        <li>Feelings: placeholder</li>
        <li>Understanding: placeholder</li>
        <li>Support: placeholder</li>
        <li>Comments: placeholder</li>
      </ul>
      <Button type="submit" variant="contained" >
        Submit
      </Button>
    </div>
  );
}

export default ReviewFeedback;

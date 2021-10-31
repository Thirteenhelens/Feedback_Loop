import "./ReviewFeedback.css";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
// Importing everything needed.

function ReviewFeedback() {
  const history = useHistory();
  const feedback = useSelector((store) => store.feedback);

  const handleSubmit = (e) => {
    // ADD AXIOS POST HERE TO SAVE INFO
    e.preventDefault();
    console.log(`Clicked Submit`);
    history.push("/success")
  };

  return (
    <div>
      <div>
        <h2>Review Your Feedback</h2>
      </div>

      {/* The feedback reducer is an array with objects stored in it.
      Due to the form only being able to be completed in a specific order (for now),
      the <p> tags only need to be tied to the order the forms are filled out. */}
      <div>
        <p>Feeling: {feedback[0]}</p>
        <br />

        <p>Understanding: {feedback[1]}</p>
        <br />

        <p>Support: {feedback[2]}</p>
        <br />

        <p>Comments: {feedback[3]}</p>
        <br />
      </div>

      <Button onClick={handleSubmit} type="submit" variant="contained">
        Submit
      </Button>
    </div>
  );
}

export default ReviewFeedback;

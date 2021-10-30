import { useState } from "react";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";

function FeelingForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const placeholder = useSelector((store) => store.placeholder);
  const [feedback, setFeedback] = useState(placeholder.feedback);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Clicked Next`);

    dispatch({
      type: "ADD_INPUT",
      payload: feedback,
    });

    history.push("/understanding");
    setFeedback("");
  };

  return (
    <div>
      <div>
        <h2>How are you feeling today?</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          type="number"
          value={feedback}
          label="Feeling?"
          variant="standard"
          id="standard-basic"
          onChange={(e) => setFeedback(e.target.value)}
        />
        <br />
        <Button
          type="submit"
          variant="outlined"
          startIcon={<ArrowForwardIosTwoToneIcon />}
        >
          Next
        </Button>
      </form>
    </div>
  );
}

export default FeelingForm;

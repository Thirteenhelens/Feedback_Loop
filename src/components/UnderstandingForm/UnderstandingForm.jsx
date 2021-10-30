import { useState } from "react";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";

function UnderstandingForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [understanding, setUnderstanding] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Clicked Next`);
    dispatch({
      type: "ADD_UNDERSTANDING",
      payload: understanding,
    });

    setUnderstanding("");
    history.push("/support");
  };

  return (
    <div>
      <div>
        <h2>How well are you understanding the content?</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          type="number"
          value={understanding}
          variant="standard"
          id="standard-basic"
          label="Understanding"
          helperText="Scale of 1-10"
          onChange={(e) => setUnderstanding(e.target.value)}
        />
        <br />
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

export default UnderstandingForm;

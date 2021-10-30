import { useState } from "react";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";

function FeelingForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [feeling, setFeeling] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Clicked Next`);

    dispatch({
      type: "ADD_FEELING",
      payload: feeling,
    });

    history.push("/understanding");
    setFeeling("");
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
          value={feeling}
          label="Feeling?"
          variant="standard"
          id="standard-basic"
          helperText="Scale of 1-10"
          onChange={(e) => setFeeling(e.target.value)}
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

export default FeelingForm;

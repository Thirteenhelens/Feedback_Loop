import { useState } from "react";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";
// Importing everything needed.

function SupportForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [support, setSupport] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Clicked Next`);
    dispatch({
      type: "ADD_INPUT",
      payload: support,
    });

    setSupport("");
    history.push("/comment");
  };

  return (
    <div>
      <div>
        <h2>How well are you being supported?</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          type="text"
          value={support}
          variant="standard"
          id="standard-basic"
          label="SupportForm"
          helperText="Scale of 1-10"
          onChange={(e) => setSupport(e.target.value)}
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

export default SupportForm;

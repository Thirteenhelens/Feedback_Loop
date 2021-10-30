import { useState } from "react";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";

function SupportForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const feedback = useSelector((store) => store.feedback);
  const [support, setSupport] = useState(feedback.support);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Clicked Next`);
    dispatch({
      type: "ADD_SUPPORT",
      payload: support,
    });

    setSupport("");
    // history.push("/comment");
  };

  return (
    <div>
      <div>
        <h2>How well are you being supported?</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          type="number"
          value={support}
          variant="standard"
          id="standard-basic"
          label="SupportForm"
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

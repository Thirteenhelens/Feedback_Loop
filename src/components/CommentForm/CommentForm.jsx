import { useState } from "react";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";

function CommentForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const feedback = useSelector((store) => store.feedback);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Clicked Next`);

    dispatch({
      type: "ADD_COMMENT",
      payload: comment,
    });

    history.push("/review");
    setComment("");
  };

  return (
    <div>
      <div>
        <h2>Any comments you want to leave?</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <TextField
          value={comment}
          variant="standard"
          id="standard-basic"
          label="CommentForm"
          onChange={(e) => setComment(e.target.value)}
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

export default CommentForm;

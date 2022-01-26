import { useState } from "react";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";
import { Grid, Typography } from "@mui/material";
// Importing everything needed.

function CommentForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Clicked Next`);

    dispatch({
      type: "ADD_INPUT",
      payload: comment,
    });

    history.push("/review");
    setComment("");
  };

  return (
    <Grid container>
      <Grid item xs={12} sx={{ p: 2 }}>
        <Typography variant="h3">Any Comments you want to leave?</Typography>
      </Grid>
      <Grid item xs={12} sx={{ p: 2 }}>
        <TextField
          //Required is not here because the comment is not necessary.
          multiline
          maxRows={4}
          value={comment}
          variant="standard"
          label="CommentForm"
          onChange={(e) => setComment(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sx={{ p: 2 }}>
        <Button
          variant="contained"
          onClick={handleSubmit}
          endIcon={<ArrowForwardIosTwoToneIcon />}
        >
          Next
        </Button>
      </Grid>
    </Grid>
  );
}

export default CommentForm;

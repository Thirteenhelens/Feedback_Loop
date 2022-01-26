
// import TextField from "@mui/material/TextField";
// import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";
// Importing everything needed.
import React from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { Grid, Button, Rating, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function SupportForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [support, setSupport] = React.useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Clicked Next`);
    dispatch({
      type: "ADD_INPUT",
      payload: support,
    });

    setSupport(0);
    history.push("/comment");
  };

  return (
    // <div>
    <Grid container>
      <Grid item xs={12} sx={{ p: 2 }}>
        <Typography variant="h3">How well are you being supported?</Typography>
      </Grid>
      <Grid item xs={12} sx={{ p: 2 }}>
        <Rating
          size="large"
          value={support}
          name="simple-controlled"
          onChange={(event, newValue) => {
            setSupport(newValue);
            console.log(newValue);
          }}
        />
      </Grid>
      <Grid item xs={12} sx={{ p: 2 }}>
        <Button
          variant="contained"
          onClick={handleSubmit}
          endIcon={<ArrowForwardIosIcon />}
        >
          Next
        </Button>
      </Grid>
      {/* <div>
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
    </div> */}
    </Grid>
  );
}

export default SupportForm;

import React from "react";
import { useDispatch } from "react-redux";
import { Grid, Button, Rating, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// Importing everything needed.

function UnderstandingForm({ setValue }) {
  const dispatch = useDispatch();
  const [understanding, setUnderstanding] = React.useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Clicked Next`);

    dispatch({
      type: "ADD_INPUT",
      payload: understanding,
    });
    setValue("support");
    setUnderstanding(0);
  };

  return (
    <Grid container>
      <Grid item xs={12} sx={{ p: 2 }}>
        <Typography variant="h3">
          How well are you understanding the content?
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ p: 2 }}>
        <Rating
          size="large"
          value={understanding}
          name="simple-controlled"
          onChange={(event, newValue) => {
            setUnderstanding(newValue);
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
    </Grid>
  );
}

export default UnderstandingForm;

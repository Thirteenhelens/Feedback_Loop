import React from "react";
import { useDispatch } from "react-redux";
import { Grid, Button, Rating, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
//Importing everything needed.

//Component function to make component display on DOM with all of it's functionality.
function FeelingForm({ setValue }) {
  //Re-naming useHistory and useDispatch for ease of use later on.
  const dispatch = useDispatch();
  //Creating the const feeling with ability to change it's state.
  const [feeling, setFeeling] = React.useState(1);

  const handleSubmit = (e) => {
    //When the form is submitted, dont't refresh the DOM.
    e.preventDefault();
    //Logging for redundancy, and making a timeline of actions in the console.
    console.log(`Clicked Next`);

    //When form is submitted, dispatch the user's submission to the store.
    dispatch({
      type: "ADD_INPUT",
      payload: feeling,
    });

    //After dispatching, move to the UnderstandingForm page.
    setValue("understanding");
    //Clearing input.
    setFeeling(0);
  };

  //What to display on component page.
  return (
    <Grid container>
      <Grid item xs={12} sx={{ p: 2 }}>
        <Typography variant="h3">How are you feeling today?</Typography>
      </Grid>
      <Grid item xs={12} sx={{ p: 2 }}>
        <Rating
          size="large"
          value={feeling}
          name="simple-controlled"
          onChange={(event, newValue) => {
            setFeeling(newValue);
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

export default FeelingForm;

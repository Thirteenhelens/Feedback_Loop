import { useState } from "react";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";
//Importing everything needed.

// This form component is the only one with (full) comments in it due to most of the form components being very similar, so enjoy! :)

//Component function to make component display on DOM with all of it's functionality.
function FeelingForm() {
  //Re-naming useHistory and useDispatch for ease of use later on.
  const history = useHistory();
  const dispatch = useDispatch();
  //Creating the const feeling with ability to change it's state.
  const [feeling, setFeeling] = useState("");

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
    history.push("/understanding");
    //Clearing input.
    setFeeling("");
  };

  //What to display on component page.
  return (
    <div>
      <div>
        <h2>How are you feeling today?</h2>
      </div>
      {/* Form contains the text input as well as the button that causes the dispatch. */}
      <form onSubmit={handleSubmit}>
        <TextField
          //Required makes it so that you can't submit an empty input.
          required
          //I chose text so that decimals and comments can be added.
          type="text"
          //Setting feeling to "" earlier comes in handy here!
          value={feeling}
          label="Feeling?"
          //Text that shows in the input field.
          variant="standard"
          //This is a MUI key, makes the table a basic layout and color.
          id="standard-basic"
          //Another MUI key.
          helperText="Scale of 1-10"
          //Text that appears below input field.
          onChange={(e) => setFeeling(e.target.value)}
          //This makes the text in the textField equal to the feeling variable.
        />
        <br />
        {/* D.I.Y. Margin to separate the textField and Button  */}
        <br />
        <Button
          type="submit"
          //Submit type in a form means that I can put the handleSubmit call in the form start.
          variant="outlined"
          //MUI styling.
          startIcon={<ArrowForwardIosTwoToneIcon />}
          //MUI Icon of an arrow for the next button.
        >
          Next
        </Button>
      </form>
    </div>
  );
}

export default FeelingForm;

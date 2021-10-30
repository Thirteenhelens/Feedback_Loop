import { useState } from "react";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";
// Importing everything needed.

//Component function to make component display on DOM with all of it's functionality.
function UnderstandingForm() {
  //Re-naming useHistory and useDispatch for ease of use later on.
  const history = useHistory();
  const dispatch = useDispatch();
  //Creating the const understanding with useState so it can be changed later on.
  const [understanding, setUnderstanding] = useState("");

  const handleSubmit = (e) => {
    //When the form is submitted, dont't refresh the DOM.
    e.preventDefault();
    //Logging for redundancy, and making a timeline of actions in the console.
    console.log(`Clicked Next`);

    //When form is submitted, dispatch the user's submission to the store.
    dispatch({
      type: "ADD_INPUT",
      payload: understanding,
    });

    //After dispatching, move to the UnderstandingForm page.
    history.push("/support");
    //Clearing input.
    setUnderstanding("");
  };

  //What to display on component page.
  return (
    <div>
      <div>
        <h2>How well are you understanding the content?</h2>
      </div>
      {/* Form contains the text input as well as the button that causes the dispatch. */}
      <form onSubmit={handleSubmit}>
        <TextField
          //Required makes it so that you can't submit an empty input.
          required
          //I chose text so that decimals and comments can be added.
          type="text"
          //Setting understanding to "" earlier comes in handy here!
          value={understanding}
          label="Understanding?"
          //Text that shows in the input field.
          variant="standard"
          //This is a MUI key, makes the table a basic layout and color.
          id="standard-basic"
          //Another MUI key.
          helperText="Scale of 1-10"
          //Text that appears below input field.
          onChange={(e) => setUnderstanding(e.target.value)}
          //This makes the text in the textField equal to the understanding variable.
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

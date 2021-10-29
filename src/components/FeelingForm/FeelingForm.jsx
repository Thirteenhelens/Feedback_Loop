import Button from "@mui/material/Button";
import { useHistory } from "react-router";
import TextField from "@mui/material/TextField";
import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";

function FeelingForm() {
  const history = useHistory();

  const handleSubmit = () => {
    console.log(`Clicked Next`);
    history.push("/understanding");
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
          id="standard-basic"
          label="FeelingForm"
          variant="standard"
        />
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

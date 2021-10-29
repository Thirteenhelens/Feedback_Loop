import Button from "@mui/material/Button";
import { useHistory } from "react-router";
import TextField from "@mui/material/TextField";
import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";

function SupportForm() {
  const history = useHistory();

  const handleSubmit = () => {
    console.log(`Clicked Next`);
    history.push("/comment");
  };

  return (
    <>
      <div>
        <h2>How well are you being supported?</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          type="number"
          id="standard-basic"
          label="SupportForm"
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
    </>
  );
}

export default SupportForm;

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";

function CommentForm() {
  return (
    <div>
      <div>
        <h2>Any comments you want to leave?</h2>
      </div>
      <TextField id="standard-basic" label="CommentForm" variant="standard" />
      <form>
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

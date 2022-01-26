// MUI Imports
import {
  Card,
  Grid,
  Button,
  Typography,
  IconButton,
  CardContent,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
// React Router and Redux imports
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

function ReviewFeedback() {
  const history = useHistory();
  const feedback = useSelector((store) => store.feedback);

  const handleSubmit = (e) => {
    // ADD AXIOS POST HERE TO SAVE INFO
    e.preventDefault();
    console.log(`Clicked Submit`);
    history.push("/success");
  };

  return (
    <Grid container sx={{ p: 2 }}>
      <Grid item xs={12} sx={{ p: 2 }}>
        <Typography variant="h3">Review your feedback</Typography>
      </Grid>
      {feedback[0] ? (
        <Grid item xs={4} sx={{ p: 2 }}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1">Feeling</Typography>
              <Typography variant="h5">{feedback[0]}</Typography>
              <IconButton sx={{ mt: 1 }} onClick={() => history.push("/")}>
                <EditIcon />
              </IconButton>
            </CardContent>
          </Card>
        </Grid>
      ) : (
        <></>
      )}
      {feedback[1] ? (
        <Grid item xs={4} sx={{ p: 2 }}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1">Understanding</Typography>
              <Typography variant="h5">{feedback[1]}</Typography>
              <IconButton
                sx={{ mt: 1 }}
                onClick={() => history.push("/understanding")}
              >
                <EditIcon />
              </IconButton>
            </CardContent>
          </Card>
        </Grid>
      ) : (
        <></>
      )}
      {feedback[2] ? (
        <Grid item xs={4} sx={{ p: 2 }}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1">Support</Typography>
              <Typography variant="h5">{feedback[2]}</Typography>
              <IconButton
                sx={{ mt: 1 }}
                onClick={() => history.push("/support")}
              >
                <EditIcon />
              </IconButton>
            </CardContent>
          </Card>
        </Grid>
      ) : (
        <></>
      )}
      {feedback[3] ? (
        <Grid item xs={12} sx={{ p: 2 }}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1">Comments</Typography>
              <Typography variant="h5">{feedback[3]}</Typography>
              <IconButton
                sx={{ mt: 1 }}
                onClick={() => history.push("/comment")}
              >
                <EditIcon />
              </IconButton>
            </CardContent>
          </Card>
        </Grid>
      ) : (
        <></>
      )}
      <Grid item xs={12}>
        <Button onClick={handleSubmit} variant="contained">
          Submit
        </Button>
      </Grid>
    </Grid>
    // The feedback reducer is an array with objects stored in it.
    // Due to the form only being able to be completed in a specific order (for now),
    // the <p> tags only need to be tied to the order the forms are filled out.
  );
}

export default ReviewFeedback;

import "./App.css";
import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CommentForm from "../CommentForm/CommentForm";
import FeelingForm from "../FeelingForm/FeelingForm";
import SupportForm from "../SupportForm/SupportForm";
import SuccessPage from "../SuccessPage/SuccessPage";
import ReviewFeedback from "../ReviewFeedback/ReviewFeedback";
import { HashRouter as Router, Route } from "react-router-dom";
import UnderstandingForm from "../UnderstandingForm/UnderstandingForm";


import { Grid, BottomNavigation, BottomNavigationAction } from "@mui/material";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CommentIcon from "@mui/icons-material/Comment";
import TestForm from "../TestForm/TestForm";

function App() {

let currentView;

const [value, setValue] = React.useState("feeling");

const handleChange = (event, newValue) => {
  setValue(newValue);
};

switch (value) {
  case "feeling":
    currentView = <FeelingForm />;
    break;
  case "understanding":
    currentView = <UnderstandingForm />;
    break;
  case "support":
    currentView = <SupportForm />;
    break;
  case "comments":
    currentView = <CommentForm />;
    break;
  default:
    console.log("error");
    break;
}


  // Renaming dispatch for ease of use later on.
  const dispatch = useDispatch();

  // Getting all of the previous reviews from the database
  const fetchFeedback = () => {
    axios
      .get("/route/feedback")
      .then((response) => {
        console.log(response.data);
        // Dispatching to feedback, to update state.
        dispatch({
          type: "FEEDBACK",
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log("Error getting feedback ->", err);
      });
  };

  const postFeedback = () => {
    axios.post("/route/feedback", (req, res) => {
      const feedback = req.body;
      pool
        .query(queryText)
        .then((response) => {
          res.sendStatus(201);
          history.push("/success");
        })
        .catch((err) => {
          console.log(`Error posting:`, err);
          res.sendStatus(500);
        });
    });
  };

  // Every time the page loads, I call fetchFeedback.
  useEffect(() => {
    fetchFeedback();
  }, []);

  // Post route will go here.

  
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>

        <Route exact path="/">
          <Grid container>
            <Grid item xs={12}>
              <BottomNavigation
                showLabels
                value={value}
                onChange={handleChange}
              >
                <BottomNavigationAction
                  value="feeling"
                  label="Feeling"
                  icon={<SentimentVerySatisfiedIcon />}
                />
                <BottomNavigationAction
                  value="understanding"
                  label="Understanding"
                  icon={<HelpOutlineIcon />}
                />
                <BottomNavigationAction
                  value="support"
                  label="Support"
                  icon={<SupportAgentIcon />}
                />
                <BottomNavigationAction
                  value="comments"
                  label="Comments"
                  icon={<CommentIcon />}
                />
              </BottomNavigation>
            </Grid>
            <Grid item xs={12}>
              {currentView}
            </Grid>
          </Grid>
        </Route>

        {/* <Route exact path="/">
          <FeelingForm />
        </Route>

        <Route path="/understanding">
          <UnderstandingForm />
        </Route>

        <Route path="/support">
          <SupportForm />
        </Route>

        <Route path="/comment">
          <CommentForm />
        </Route>

        <Route path="/review">
          <ReviewFeedback />
        </Route> */}

        <Route path="/success">
          <SuccessPage fetchFeedback={fetchFeedback} />
        </Route>
      </div>
    </Router>
  );
}

export default App;

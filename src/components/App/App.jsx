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

function App() {
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
        </Route>

        <Route path="/success">
          <SuccessPage fetchFeedback={fetchFeedback} />
        </Route>
      </div>
    </Router>
  );
}

export default App;

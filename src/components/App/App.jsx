import "./App.css";
import React from "react";
import axios from "axios";
import { useHistory } from "react-router";
import CommentForm from "../CommentForm/CommentForm";
import FeelingForm from "../FeelingForm/FeelingForm";
import SupportForm from "../SupportForm/SupportForm";
import ReviewFeedback from "../ReviewFeedback/ReviewFeedback";
import { HashRouter as Router, Route } from "react-router-dom";
import UnderstandingForm from "../UnderstandingForm/UnderstandingForm";

function App() {
  const history = useHistory();

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>

        <Route exact path='/' >
          <FeelingForm />
        </Route>

        <Route path='/understanding' >
          <UnderstandingForm />
        </Route>

        <Route path='/support' >
          <SupportForm />
        </Route>

        <Route path='/comment' >
          <CommentForm />
        </Route>

        <Route path='/review' >
          <ReviewFeedback />
        </Route>

      </div>
    </Router>
  );
}

export default App;

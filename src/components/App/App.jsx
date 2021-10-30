import "./App.css";
import React from "react";
import CommentForm from "../CommentForm/CommentForm";
import FeelingForm from "../FeelingForm/FeelingForm";
import SupportForm from "../SupportForm/SupportForm";
import SuccessPage from "../SuccessPage/SuccessPage";
import ReviewFeedback from "../ReviewFeedback/ReviewFeedback";
import { HashRouter as Router, Route } from "react-router-dom";
import UnderstandingForm from "../UnderstandingForm/UnderstandingForm";

function App() {
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
          <SuccessPage />
        </Route>
      </div>
    </Router>
  );
}

export default App;

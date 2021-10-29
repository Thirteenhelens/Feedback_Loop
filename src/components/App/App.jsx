import "./App.css";
import React from "react";
import axios from "axios";
import CommentForm from "../CommentForm/CommentForm";
import FeelingForm from "../FeelingForm/FeelingForm";
import SupportForm from "../SupportForm/SupportForm";
import UnderstandingForm from "../UnderstandingForm/UnderstandingForm";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <CommentForm />
      <FeelingForm />
      <SupportForm />
      <UnderstandingForm />
    </div>
  );
}

export default App;

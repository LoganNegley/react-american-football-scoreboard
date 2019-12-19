//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import ScoreButtons from '../src/ScoreButtons';


function App() {
  // TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.


  return (
    <div className="container">
      <ScoreButtons/>
    </div>
  );
}

export default App;

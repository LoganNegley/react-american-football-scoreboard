import React, {useState} from 'react';
import Scoreboard from '../src/Scoreboard';


function ScoreButtons(){

    const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

 const touchdown = 7;

  const awayTouchdown = ()=>{
   setAwayScore (awayScore + 7);
 }

    return(
        <>
         <Scoreboard homeScore={homeScore} awayScore={awayScore} touchdown={touchdown} setHomeScore={setHomeScore} setAwayScore={setAwayScore}/>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => {setHomeScore(homeScore + touchdown)}}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={()=> {setHomeScore(homeScore + 3)}}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick = {awayTouchdown} >Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick = {()=>{setAwayScore(awayScore + 3)}}>Away Field Goal</button>
        </div>
      </section>
      </>
    )
};

export default ScoreButtons
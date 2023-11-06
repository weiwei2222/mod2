import React from "react";

function Player(props) {
  // console.log(props.whichPlayer);
  return (
    <div className={props.whichPlayer}>
      <h2>Player {props.whichPlayer}</h2>
      <h3>Wins: </h3>
    </div>
  );
}

export default Player;

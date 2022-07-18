// import React from 'react'
// import './game-cover.jsx'

// export const GameCover = ({ image="" }) => {
//   return (
//     <div className='game-cover' style={{backgroundImage: `url(${image}`}}>game-cover</div>
//   )
// }


import React from "react";
import "./game-cover.css";
export const GameCover = ({ image = "" }) => {
  return (
    <div className="game-cover" style={{ backgroundImage: `url(${image})` }} />
  );
};

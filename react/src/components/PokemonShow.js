import React from 'react';
import { browserHistory, Link } from 'react-router';

const PokemonShow = (props) => {
  return(
    <div>
      <div>
      <br /><br />
        <h1> Pick a Pokemon! </h1>
      </div>
    <div className="card">
      <div className="content">
        <div className="front">
          <img src={props.image} height='600' width='600'/>
        </div>
      <div className="back">
        <h1 className='poke-h'> Name:</h1>
        <p className='poke-p'><br />{props.title}</p>
        <h2 className='poke-h'><br />Weight:</h2>
        <p className='poke-p'><br />{props.weight}</p>
      </div>
    </div>
  </div>
  </div>
  )
}

export default PokemonShow;

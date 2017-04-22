import React from 'react';
import { browserHistory, Link } from 'react-router';

const PokemonShow = (props) => {
  return(
    <div>
    <div className="card">
      <div className="content">
        <div className="front">
          <img src={props.image} height='200' width='200'/>
        </div>
      <div className="back">
        <p className='poke-p'>Name: {props.title}</p>
        <p className='poke-p'>Weight: {props.weight}</p>
      </div>
    </div>
  </div>
  </div>
  )
}

export default PokemonShow;

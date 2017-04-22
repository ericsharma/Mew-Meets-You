import React from 'react';
import { browserHistory, Link } from 'react-router';

const PokemonShow = (props) => {
  return(
    <div className="article-show">
    <h1> Name: {props.title}  </h1>
    <h2> Weight: {props.weight} </h2>
    <img src={props.image}/>
    </div>
  )
}

export default PokemonShow;
// <h2>{props.title}</h2>
// <p>{props.body}</p>
// <img src="{props.sprite}" />
// <div className="button">
// <button className="round" onClick={browserHistory.goBack}>Back</button>
// </div>
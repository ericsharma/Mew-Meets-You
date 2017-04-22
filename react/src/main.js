import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import PokemonShowContainer from './containers/PokemonShowContainer';


$(function() {
  ReactDOM.render(
    <PokemonShowContainer />,
    document.getElementById('app')
  );
});

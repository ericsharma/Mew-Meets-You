import React, { Component } from 'react';
import PokemonShow from '../components/PokemonShow';


class PokemonShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {},
      number: 0
    }
  }

  componentDidMount() {


    fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor((Math.random())*700)}/`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ pokemon: responseData })
      })
  }

  render() {
    return(
      <PokemonShow
        key={this.state.pokemon.id}
        id={this.state.pokemon.id}
        title={this.state.pokemon.name}
        body={this.state.pokemon.weight}

       />

    )
  }
}

export default PokemonShowContainer;

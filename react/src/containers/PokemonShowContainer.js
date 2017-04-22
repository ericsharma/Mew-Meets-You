import React, { Component } from 'react';
import PokemonShow from '../components/PokemonShow';


class PokemonShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {},
      number: Math.floor((Math.random())*700)


    }
  }

  componentDidMount() {


    fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.number}/`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ pokemon: responseData })

      })


  }

  render() {
    let image_url = `https://raw.githubusercontent.com/kisaraofpern/official-pokemon-art/master/${this.state.number}.png`
  
    return(
      <PokemonShow
        key={this.state.pokemon.id}
        id={this.state.pokemon.id}
        title={this.state.pokemon.name}
        weight={this.state.pokemon.weight}
        image= {image_url}

       />

    )
  }
}

export default PokemonShowContainer;

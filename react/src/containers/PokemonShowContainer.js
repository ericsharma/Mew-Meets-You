import React, { Component } from 'react';
import PokemonShow from '../components/PokemonShow';


class PokemonShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {},
      number: Math.floor((Math.random())*700)
    }
    this.onRightSwipe = this.onRightSwipe.bind(this);
  }

  onRightSwipe(event) {

    let image_url = `https://raw.githubusercontent.com/kisaraofpern/official-pokemon-art/master/${this.state.number}.png`
    let payload = JSON.stringify( {
      key: this.state.pokemon.id,
      id: this.state.pokemon.id,
      name: this.state.pokemon.name,
      weight: this.state.pokemon.weight,
      image_url: image_url
    });

    fetch(`/api/v1/matches.json`, {
      credentials: 'same-origin',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: payload
    });

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
      <div id="tinderContainer">
        <PokemonShow
          key={this.state.pokemon.id}
          id={this.state.pokemon.id}
          title={this.state.pokemon.name}
          weight={this.state.pokemon.weight}
          image= {image_url}
        />
        <form onSubmit={this.onRightSwipe}>
          <a href="/" className="button" id="left-swipe">Ew! No.</a>
          <input
            type="submit"
            value = "Hells yeeeeah."
            className="button"
            id="right-swipe"
          />
        </form>
      </div>
    )

  }
}

export default PokemonShowContainer;

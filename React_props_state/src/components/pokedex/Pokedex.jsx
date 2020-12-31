import React from 'react';
import Pokecard from './Pokecard.jsx';
import styles from './pokedex.css';

const Pokedex = ({pokemon}) => {
    return (
      <div className={styles.PokemonItems}>
        <h2 className={styles.Pokemon}>Welcome to Pokedex Application</h2>
      {pokemon.map(poke=> <Pokecard key={poke.id} {...poke} />)}
      </div>
    )
};


Pokedex.defaultProps =
    {
        pokemon: [
          {
            id: 1,
            name: "Charmander",
            type: "fire",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
          },
          {
            id: 2,
            name: "Squirtle",
            type: "water",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
          },
          {
            id: 3,
            name: "Butterfree",
            type: "flying",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
          },
          {
            id: 4,
            name: "Rattata",
            type: "normal",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
          },
          {
            id: 5,
            name: "Metapod",
            type: "bug",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
          }
        ]
      };      

export default Pokedex;
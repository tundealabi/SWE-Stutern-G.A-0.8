import React from 'react';
import PropTypes from 'prop-types';
import  style  from './pokecard.css';

const Pokecard = ({name,image,type}) => (
    <div className={style.pokemonItem}>
    <h2 className={style.pokemonName}>{name}</h2>
    <img src={image} alt={name} />
    <h3 className={style.pokemonType}>{type}</h3>
</div>
);

Pokecard.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    type: PropTypes.string
}

export default Pokecard;
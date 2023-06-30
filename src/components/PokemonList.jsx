import React from 'react';
import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemones }) => {
    return (
        <div className="pokeList">
            {   
                pokemones && pokemones.map((poke) => <PokemonCard key={poke.name} name={poke.name}/>)
            }
        </div>
    );
}
 
PokemonList.defaultProps = {
    pokemones: Array(10).fill(''),
}

export default PokemonList;
import React from 'react';
import data from  './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component{
  render(){
    return(
      <>
      {data.map((poke) => ( 
      <Pokemon 
      name={ poke.name }
      type={ poke.type }
      averageWeight={ poke.averageWeight }
      image={ poke.image }
      />))}
      </>
    );
  }
}

export default Pokedex;

import React from 'react'
import Perritos from '../Perritos';
import './index.css'

const Container = ( {perritos} ) => {

  return (
    <div className="container">
    <h2>Clientes caninos de veterinario</h2>
    {
      perritos.map( (perritos) => <Perritos  nombre={perritos.nombre} edad={perritos.edad} sexo={perritos.sexo} raza={perritos.raza} tamaño={perritos.tamaño}/> )
    } 
  </div>
  )
};

export default Container;
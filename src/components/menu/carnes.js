import React from 'react'
import burger from '../../images/burgers/6124271f-7ac9-40b7-b792-8c516fba53e7.jpg'

import Carne from '../menu/carne'
function Carnes(){
  return(
    <>
    <div>
      <h1 id="carnes" className="font-SyneMono text-5xl md:text-6xl text-center text-yellow-500">Carnes</h1>
      <Carne image={burger} title="Filete New York" description="Filete New york acompañado de papas fritas y Guacamole" price="259" />
    </div>
    </>
  )
}

export default Carnes
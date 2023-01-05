import React from 'react'
import burger from '../../images/hamburger-cheeseburger-veggie-burger-fast-food-burguer-d02a8de84e0ede0b8987bbe0f866487d.png'

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
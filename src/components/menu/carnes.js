import React from 'react'
import burger from '../../images/burgers/6124271f-7ac9-40b7-b792-8c516fba53e7.jpg'

import Carne from '../menu/carne'
function Carnes(){
  return(
    <>
    <div>
      <h1 id="carnes" className="font-SyneMono text-5xl md:text-6xl text-center text-yellow-500">Carnes</h1>
      <Carne image={burger} title="Filete New York" description="¡Disfruta de un filete New York de primera calidad con la combinación perfecta de papas fritas y guacamole fresco!"  descriptionEN="Enjoy a top-notch New York Steak paired with the perfect combination of crispy fries and fresh guacamole!" price="259" />
    </div>
    </>
  )
}

export default Carnes
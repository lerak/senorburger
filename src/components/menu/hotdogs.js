import React from 'react'
import hotdog from '../../images/burgers/hotdog.jpg'
import Hotdog from '../menu/hotdog'
function Hotdogs(){
  return(
    <>
    <div>
    <h1 id="hotdogs" className="font-SyneMono text-5xl md:text-6xl text-center text-yellow-500">Hotdogs</h1>
  </div>
    <Hotdog image={hotdog} title="Hotdog del chef" description="Salchicha Krakauer con cebolla frita, cebolla fresca y Sweet Relish y mostaza acompañado de papas fritas" descriptionEN="Krakauer Sausage with Fried Onion, Fresh Onion and Sweet Relish and Mustard Accompanied by French Fries." price="124"/>
  </>
  )
}

export default Hotdogs
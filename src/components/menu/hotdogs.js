import React from 'react'
import hotdog from '../../images/burgers/hotdog.jpg'
import Hotdog from '../menu/hotdog'
function Hotdogs(){
  return(
    <>
    <div>
    <h1 id="hotdogs" className="font-SyneMono text-5xl md:text-6xl text-center text-yellow-500">Hotdogs</h1>
  </div>
    <Hotdog image={hotdog} title="Hotdog del chef" description="Salchicha Krakauer con cebolla frita, cebolla fresca y Sweet Relish y mostaza acompañado de papas fritas" descriptionEN="Krakauer Sausage with Fried Onion, Fresh Onion and Sweet Relish and Mustard Accompanied by French Fries." price="134"/>
    <Hotdog image={hotdog} title="Wunderbrat Hotdog" description="Bratwurst a la parrilla, cebollas caramelizadas, pan brioche y crujientes papas fritas. ¡Un deleite alemán!" descriptionEN="Grilled bratwurst, caramelized onions, Brioche bun, and crispy fries. A German delight!" price="134"/>
    <Hotdog image={hotdog} title="Wunderbrat Hotdog Mexicano" description="Bratwurst a la parrilla, cebollas caramelizadas, pan brioche y crujientes papas fritas. ¡Un deleite alemán!" descriptionEN="Grilled bratwurst, caramelized onions, Brioche bun, and crispy fries." price="134"/>
  </>
  )
}

export default Hotdogs
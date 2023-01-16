import React from 'react'
import Crepa from "../menu/crepa"

import pannenkoek from "../../images/burgers/pannenkoek.jpg"

function Crepas(){
  return(
    <>
    <div>
    <h1 id="crepas" className="font-SyneMono text-5xl md:text-6xl text-center text-yellow-500">Crepas Holandesas</h1>
  </div>
<Crepa image={pannenkoek} title="Crepa con Tocino, Queso y Mapple" description="Pannenkoeken(Crepas Holandesas) con queso Mozzarella, tocino y maple: Una deliciosa combinación de queso cremoso, tocino crocante y sabor dulce de maple." descriptionEN="Dutch pancakes with Mozzarella cheese, bacon and maple syrup: A delicious combination of creamy cheese, crispy bacon and 

sweet maple flavor." price="89" pricem="89"/>
<Crepa image={pannenkoek} title="Crepa con Nutella y Platano" description="Pannenkoeken(Crepas Holandesas) con Nutella y plátano: Una deliciosa mezcla de Nutella y plátano maduro." descriptionEN="Dutch pancakes with Nutella and banana: A delicious blend of Nutella and ripe banana.
" price="79" />
    <Crepa image={pannenkoek} title="Crepa con Jamon y Queso" description="Pannenkoeken(Crepas Holandesas) con jamón y queso Mozzarella: Una deliciosa combinación de jamón y queso cremoso." descriptionEN="Dutch pancakes with Ham and Mozzarella Cheese: A delicious combination of ham and creamy cheese.
" price="89" />
    
  </>
  )
}

export default Crepas
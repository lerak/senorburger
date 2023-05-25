import React from 'react'
import burger from '../../images/hamburger-cheeseburger-veggie-burger-fast-food-burguer-d02a8de84e0ede0b8987bbe0f866487d.png'
import Combo from '../menu/combo'
function Combos(){
  return(
    <>
    <div>
    <h1 id="combos" className="font-SyneMono text-5xl md:text-6xl text-center text-yellow-500">Combos</h1>
  </div>
    <Combo image={burger} title="Combo Individual" description="1 Playa Burger con papas y 1 bebida" descriptionEN="1 Playa burger with fries and 1 beverage" price="174"/>
    <Combo image={burger} title="Combo Pareja" description="2 Playa burgers con papas y 2 bebidas" descriptionEN="2 Playa burgers with fries and 2 beverages" price="349"/>
    <Combo image={burger} title="Combo Familiar" description="4 Playa burgers con papas y 4 bebidas" descriptionEN="4 Playa burgers with fries and 4 beverages" price="729"/>
    </>
  )
}

export default Combos



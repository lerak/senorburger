import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/card'
//import burger from '../images/BURGERBAR_campagne-website_BURGER_01.png'
//import burger from '../images/rsz_img_3716.jpg'
import Burgers from '../components/menu/burgers'
import Extras from '../components/menu/extras'
import Hotdogs from '../components/menu/hotdogs'
import Combos from '../components/menu/combos'
import Carnes from '../components/menu/carnes'
import Bebidas from '../components/menu/bebidas'
import Crepas from '../components/menu/crepas'
import fries from '../images/burgers/papas.jpg'
import friesQ from '../images/burgers/papasQueso.jpg'

import dedo from '../images/burgers/dedos.jpg'

import "./menu.css"
function MenuPage() {
  
  return(
    <Layout>
      <SEO />
      <div className=''>
        <div className="sticky top-0 z-30 w-full px-2 py-4 bg-gray-900 ">
          <div className="flex items-center space-x-1">
            <ul className="text-1xl space-x-2 inline-flex flex-wrap text-yellow-500  rounded">
              <li className="px-2 py-2 font-SyneMono hover:text-white "><a href="#entradas">Entradas</a></li>
              <li className="px-2 py-2 font-SyneMono hover:text-white"><a href="#hamburguesas">Hamburguesas</a></li>
              <li className="px-2 py-2 font-SyneMono hover:text-white"><a href="#combos">Combos</a></li>
              <li className="px-2 py-2 font-SyneMono hover:text-white"><a href="#hotdogs">Hotdogs</a></li>
              <li className="px-2 py-2 font-SyneMono hover:text-white"><a href="#carnes">Carnes</a></li>
              <li className="px-2 py-2 font-SyneMono hover:text-white"><a href="#crepas">Crepas</a></li>
              <li className="px-2 py-2 font-SyneMono hover:text-white"><a href="#bebidas">Bebidas</a></li>
            </ul> 
          </div>
        </div>
        <div>
          <h1 id="entradas"className="font-SyneMono text-5xl md:text-6xl text-center text-yellow-500">Entradas</h1>
        </div>
        <Card image={dedo} description="5 Dedos de queso con queso Mozzarella" descriptionEN="5 Cheese fingers with Mozzarella cheese" title="5 Dedos de Queso" price="110"/>
          <Burgers />
          <Hotdogs />
        
        <div>
          <h1 className="font-SyneMono text-5xl md:text-6xl text-center text-yellow-500">Papas</h1>
          <Card image={fries} title="Papas a la Francesa" description="Porcion de papas" price="55"/>
          <Card image={friesQ} title="Papas a la Francesa con Queso" description="porcion de papas con queso amarillo" price="65"/>
        </div>
        {/* COMBOS */}
        <Combos />
          <Extras />
          {/* CARNES */}
          <Carnes />
        {/* BEBIDAS */}
        <Crepas />
        <Bebidas />
          {/* <div>
            <h1 className="font-SyneMono text-5xl md:text-6xl text-center text-yellow-500">Combos</h1>
            <Card image={burger} title="Combo Individual" description="1 Playa Burger con papas y 1 bebida" descriptionEN="1 Playa burger with fries and 1 beverage" price="149"/>
            <Card image={burger} title="Combo Pareja" description="2 Playa burgers con papas y 2 bebidas" descriptionEN="2 Playa burgers with fries and 2 beverages" price="259"/>
            <Card image={burger} title="Combo Familiar" description="4 Playa burgers con papas y 4 bebidas" descriptionEN="4 Playa burgers with fries and 4 beverages" price="549"/>
          <Card image={burger} title="Combo Niños" description="1 Playita con  papas y un refresco" descriptionEN="1 Playita burger fries and one beverage" price="105" /> 
          </div> */}
       
       {/*<div>
          <h1 className="font-SyneMono text-5xl md:text-6xl text-center text-yellow-500">Postres</h1>
          <Card image={burger} title="Pay de Zarzamora" price="30" />
          <Card image={burger} title="Pay de Piña" price="30" />
        </div>*/}
        </div>
      
    </Layout>
  )
}

export default MenuPage;
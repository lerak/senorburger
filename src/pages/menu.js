import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/card'
//import burger from '../images/BURGERBAR_campagne-website_BURGER_01.png'
//import burger from '../images/rsz_img_3716.jpg'
import Burgers from '../components/menu/burgers'
import Hotdogs from '../components/menu/hotdogs'
import fries from '../images/burgers/papas.jpg'
import friesQ from '../images/burgers/papasQueso.jpg'
import soda from '../images/soda.png'
import dedo from '../images/burgers/dedos.jpg'
import burger from '../images/hamburger-cheeseburger-veggie-burger-fast-food-burguer-d02a8de84e0ede0b8987bbe0f866487d.png'

import "./menu.css"
function MenuPage() {
  
  return(
    <Layout>
      <SEO />
      <div>
        <div className="sticky top-0 z-30 w-full px-2 py-4 bg-gray-900 sm:px-4">
          <div className="flex items-center space-x-1">
            <ul className="hidden space-x-2 md:inline-flex text-yellow-500 hover:text-white rounded">
              <li className="px-4 py-2 font-SyneMono">Entradas</li>
              <li className="px-4 py-2 font-SyneMono">Hamburguesas</li>
              <li className="px-4 py-2 font-SyneMono">Combos</li>
              <li className="px-4 py-2 font-SyneMono">Hotdogs</li>
              <li className="px-4 py-2 font-SyneMono">Crepas</li>
              <li className="px-4 py-2 font-SyneMono">Bebidas</li>
            </ul> 
          </div>
        </div>
        <div>
          <h1 className="font-SyneMono text-5xl md:text-6xl text-center text-yellow-500">Entradas</h1>
        </div>
        <Card image={dedo} description="5 Dedos de queso con queso Mozzarella" descriptionEN="5 Cheese fingers with Mozzarella cheese" title="5 Dedos de Queso" price="110"/>
        <Card description="1 Empanada Argentina" title="Empanada Argentina" price="45" />
       
          <Burgers />
          <Hotdogs />
        
        <div>
          <h1 className="font-SyneMono text-5xl md:text-6xl text-center text-yellow-500">Papas</h1>
          <Card image={fries} title="Papas a la Francesa" description="Porcion de papas" price="55"/>
          <Card image={friesQ} title="Papas a la Francesa con Queso" description="porcion de papas con queso amarillo" price="65"/>
        </div>
        <div>
            <h1 className="font-SyneMono text-5xl md:text-6xl text-center text-yellow-500">Combos</h1>
            <Card image={burger} title="Combo Individual" description="1 Playa Burger con papas y 1 bebida" descriptionEN="1 Playa burger with fries and 1 beverage" price="149"/>
            <Card image={burger} title="Combo Pareja" description="2 Playa burgers con papas y 2 bebidas" descriptionEN="2 Playa burgers with fries and 2 beverages" price="259"/>
            <Card image={burger} title="Combo Familiar" description="4 Playa burgers con papas y 4 bebidas" descriptionEN="4 Playa burgers with fries and 4 beverages" price="549"/>
          {/* <Card image={burger} title="Combo Niños" description="1 Playita con  papas y un refresco" descriptionEN="1 Playita burger fries and one beverage" price="105" /> */}
          </div>
          <div>
          <h1 className="font-SyneMono text-5xl md:text-6xl text-center text-yellow-500">Extras</h1>
          <Card title="Extra tocino"  price="25"/>
          <Card  title="Extra champiñones" price="15"/>
          <Card title="Extra cebolla asada" price="15" />
          <Card title="Extra Cebolla cruda" price="15" />
          <Card title="Extra Piña" price="15" />
          <Card title="Extra Queso Americano" price="10" />
          <Card title="Extra Aguacate" price="20" />
          <Card title="Orden de Guacamole" price="50" />
          </div>
          <div>
            <h1 className="font-SyneMono text-5xl md:text-6xl text-center text-yellow-500">Carnes</h1>
            <Card image={burger} title="Filete New York" description="Filete New york acompañado de papas fritas y Guacamole" price="259" />
          </div>
        <div>
          <h1 className="font-SyneMono text-5xl md:text-6xl text-center text-yellow-500">Bebidas</h1>
        </div>
          <Card image={soda} title="Coca Cola" price="40"/>
          <Card image={soda} title="Coca Cola Zero" price="40" />
          <Card image={soda} title="Mundet" price="40" /> 
          <Card image={soda} title="Peñafiel Limon" price="40" />
          <Card image={soda} title="Agua Natural" price="25" />
          {/* <Card image={soda} title="Agua Mineral" price="25" /> */}
          <Card image={soda} title="Agua de Limon" price="45"/>
          <Card image={soda} title="Agua de Jamaica" price="45"/>
          <Card image={soda} title="Mojito sin Alcohol" price="55" />
          <Card image={soda} title="Cafe Americano" price="35" />
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
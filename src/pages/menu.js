import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/card'
//import burger from '../images/BURGERBAR_campagne-website_BURGER_01.png'
//import burger from '../images/rsz_img_3716.jpg'
import dobleSmash from "../images/burgers/doble_smash.jpg"
import playa from "../images/burgers/playa.jpg"
import coral from "../images/burgers/coral_big.jpg"
import manglar from "../images/burgers/manglar.jpg"
import ocean from "../images/burgers/ocean.jpg"
import nohoch from "../images/burgers/nohoch_big.jpg"
import selva from "../images/burgers/selva_big.jpg"
import hawaiiana from "../images/burgers/hawaiiana_big.jpg"
import smash from "../images/burgers/smash.jpg"
import casa from "../images/burgers/casa.jpg"
import fries from '../images/fries.png'
import soda from '../images/soda.png'
import burger from '../images/hamburger-cheeseburger-veggie-burger-fast-food-burguer-d02a8de84e0ede0b8987bbe0f866487d.png'
import "./menu.css"
function MenuPage() {
  
  return(
    <Layout>
      <SEO />
      <div>
        <div>
          <h1 className="font-SyneMono text-5xl md:text-6xl text-center text-yellow-500">Burgers</h1>
        </div>
          <Card image={smash} title="Smash Burger" description="Una hamburguesa de 80 gramos de carne 100% de res de la región sobre un pan Brioche fresco  con mayonesa, lechuga, tomate y queso.
" descriptionEN="A 80 gram beef patty with regional 100% ground beef on a freshly baked Brioche bun with mayonaise, lettuce, tomato and cheese.
" price="65"/>
          <Card image={dobleSmash} title="Double Smash" description="Una hamburguesa de 2 carnes de 100 gramos de carne 100% de res de la región sobre un pan Brioche fresco  con mayonesa, lechuga, tomate, queso, tocino y cebolla asada acompañada de papas fritas.
" descriptionEN="Two 100 grams beef patties with regional 100% ground beef on a freshly baked Brioche bun with mayonaise, lettuce, tomato, cheese, bacon and grilled onion, accompanied by french fries.
" price="125" />
          <Card image={playa} title="Playa" description="Una hamburguesa de 180 gramos de carne 100% de res de la región sobre un pan Brioche fresco  con mayonesa, lechuga, tomate, queso y tocino, acompañada de papas fritas.
" descriptionEN="A 180 gram beef patty with regional 100% ground beef on a freshly baked Brioche bun with mayonaise, lettuce, tomato, cheese, and bacon, accompanied by french fries.
" price="90"/>
          <Card image={coral} title="Coral" description="Una hamburguesa de 180 gramos de carne 100% de res de la región sobre un pan Brioche fresco  con mayonesa, lechuga, tomate, queso, tocino y cebolla asada, acompañada de papas fritas.
" descriptionEN="A 180 gram beef patty with regional 100% ground beef on a freshly baked Brioche bun with mayonaise, lettuce, tomato, cheese, bacon and grilled onions, accompanied by french fries.
" price="110"/>
          <Card image={manglar} title="Manglar" description="La Manglar una hamburguesa de 180 gramos de carne 100% de res de la región sobre un pan Brioche fresco  con mayonesa, lechuga, tomate, queso, tocino y champiñones, acompañada de papas fritas." descriptionEN="Manglar a 180 gram beef patty with regional 100% ground beef on a freshly baked Brioche bun with mayonaise, lettuce, tomato, cheese, bacon and mushrooms, accompanied by french fries.

" price="110"/>
          <Card image={hawaiiana} title="Hawaiiana" description="La Hawaiiana una hamburguesa de 180 gramos de carne 100% de res de la región sobre un pan Brioche fresco  con mayonesa, lechuga, tomate, queso, tocino, jamón y piña, acompañada de papas fritas.
" descriptionEN="Hawaiiana a 180 gram beef patty with regional 100% ground beef on a freshly baked Brioche bun with mayonaise, lettuce, tomato, cheese, bacon, ham and pineapple, accompanied by french fries.
" price="120"/>
          <Card image={ocean} title="Ocean" description="La Ocean una hamburguesa de 180 gramos de carne 100% de res de la región sobre un pan Brioche fresco  con mayonesa, lechuga, tomate, queso azul, tocino y cebolla asada, acompañada de papas fritas.
" descriptionEN="Ocean a 180 gram beef patty with regional 100% ground beef on a freshly baked Brioche bun with mayonaise, lettuce, tomato, blue cheese, bacon and grilled onions, accompanied by french fries.
" price="140"/>
          <Card image={casa} title="De La Casa" description="De la casa una hamburguesa de 180 gramos de carne 100% de res de la región sobre un pan Brioche fresco  con mayonesa, lechuga, tomate, queso, tocino, champiñones y piña, acompañada de papas fritas.
" descriptionEN="De la casa a 180 gram beef patty with regional 100% ground beef on a freshly baked Brioche bun with mayonaise, lettuce, tomato, cheese, bacon, mushrooms and pineapple, accompanied by french fries.
" price="120"/>
          <Card image={nohoch} title="Nohoch" description="La Nohoch una hamburguesa de 2 carnes de 180 gramos de carne 100% de res de la región sobre un pan Brioche fresco  con mayonesa, lechuga, tomate, queso, tocino y cebolla asada acompañada de papas fritas.
" descriptionEN="Two 180 grams beef patties with regional 100% ground beef on a freshly baked Brioche bun with mayonaise, lettuce, tomato, cheese, bacon and grilled onion, accompanied by french fries.
" price="170" />
          <Card image={selva} title="Selva" description="La Selva una hamburguesa de 180 gramos de carne 100% de res de la región sobre un pan Brioche fresco  con mayonesa, lechuga, tomate, queso, tocino y guacamole, acompañada de papas fritas.
" descriptionEN="Selva a 180 gram beef patty with regional 100% ground beef on a freshly baked Brioche bun with mayonaise, lettuce, tomato, cheese, bacon and guacamole, accompanied by french fries." price="110" />
          <div>
          <h1 className="font-SyneMono text-5xl md:text-6xl text-center text-yellow-500">Extras</h1>
        </div>
          <Card image={burger} title="Extra tocino"  price="25"/>
          <Card image={burger} title="Extra champiñones" price="10"/>
          <Card image={burger} title="Extra cebolla asada" price="10" />
          <Card image={burger} title="Extra Queso Americano" price="10" />
          <Card image={burger} title="Extra Aguacate" price="20" />
        <div>
          <h1 className="font-SyneMono text-5xl md:text-6xl text-center text-yellow-500">Papas</h1>
        </div>
          <Card image={fries} title="Papas a la Francesa" description="Porcion de papas" price="55"/>
          <Card image={fries} title="Papas a la Francesa con Queso" description="porcion de papas con queso amarillo" price="65"/>
        <div>
          <h1 className="font-SyneMono text-5xl md:text-6xl text-center text-yellow-500">Bebidas</h1>
        </div>
          <Card image={soda} title="Coca Cola" price="30"/>
          <Card image={soda} title="Coca Cola Zero" price="30" />
          <Card image={soda} title="Mundet" price="30" /> 
          <Card image={soda} title="Naranja & Nada" price="30" />
          <Card image={soda} title="Agua Natural" price="20" />
          <Card image={soda} title="Agua Mineral" price="20" />
          <Card image={soda} title="Agua de Limon" price="25"/>
          <Card image={soda} title="Agua de Jamaica" price="25"/>
          <div>
          <h1 className="font-SyneMono text-5xl md:text-6xl text-center text-yellow-500">Combos</h1>
          <Card image={burger} title="Combo Individual" description="1 Playa Burger con papas y 1 refresco" price="115"/>
          <Card image={burger} title="Combo Pareja" description="2 Playa burgers con papas y 2 refrescos" price="220"/>
          <Card image={burger} title="Combo Familiar" description="4 Playa burgers con papas y 4 refrescos" price="430"/>
        </div>
        <div>
          <h1 className="font-SyneMono text-5xl md:text-6xl text-center text-yellow-500">Postres</h1>
          <Card image={burger} title="Pay de Zarzamora" price="30" />
          <Card image={burger} title="Pay de Piña" price="30" />
        </div>
      </div>
        
    </Layout>
  )
}

export default MenuPage;
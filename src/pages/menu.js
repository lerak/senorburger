import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/card'
//import burger from '../images/BURGERBAR_campagne-website_BURGER_01.png'
//import burger from '../images/rsz_img_3716.jpg'
import dobleSmash from "../images/burgers/doblesmash.jpg"
import playa from "../images/burgers/playa.jpg"
import coral from "../images/burgers/coral.jpg"
import manglar from "../images/burgers/manglar.jpg"
import ocean from "../images/burgers/ocean.jpg"
import nohoch from "../images/burgers/nohoch.jpg"
import selva from "../images/burgers/selva.jpg"
import hawaiiana from "../images/burgers/hawaiiana.jpg"
import smash from "../images/burgers/smash.jpg"
import casa from "../images/burgers/casa.jpg"
import fries from '../images/burgers/papas.jpg'
import friesQ from '../images/burgers/papasQueso.jpg'
import soda from '../images/soda.png'
import dedo from '../images/burgers/dedos.jpg'
import burger from '../images/hamburger-cheeseburger-veggie-burger-fast-food-burguer-d02a8de84e0ede0b8987bbe0f866487d.png'
import hotdog from '../images/burgers/hotdog.jpg'
import "./menu.css"
function MenuPage() {
  
  return(
    <Layout>
      <SEO />
      <div>
        <div>
          <h1 className="font-SyneMono text-5xl md:text-6xl text-center text-yellow-500">Entradas</h1>
        </div>
        <Card image={dedo} description="5 Dedos de queso con queso Mozzarella" descriptionEN="5 Cheese fingers with Mozzarella cheese" title="5 Dedos de Queso" price="110"/>
        <div>
          <h1 className="font-SyneMono text-5xl md:text-6xl text-center text-yellow-500">Burgers</h1>
        </div>
  <Card image={playa} title="Playa" description="Una hamburguesa de 180 gramos de carne 100% de res de la región sobre un pan Brioche fresco  con mayonesa, lechuga, tomate, queso y tocino, acompañada de papas fritas.
" descriptionEN="A 180 gram beef patty with regional 100% ground beef on a freshly baked Brioche bun with mayonaise, lettuce, tomato, cheese, and bacon, accompanied by french fries.
" price="124" pricem="89"/>
  <Card image={nohoch} title="Nohoch" description="La Nohoch una hamburguesa de 2 carnes de 180 gramos de carne 100% de res de la región sobre un pan Brioche fresco  con mayonesa, lechuga, tomate, queso, tocino y cebolla asada acompañada de papas fritas.
" descriptionEN="Two 180 grams beef patties with regional 100% ground beef on a freshly baked Brioche bun with mayonaise, lettuce, tomato, cheese, bacon and grilled onion, accompanied by french fries.
" price="199" />
          <Card image={dobleSmash} title="Double Smash" description="Una hamburguesa de 2 carnes de 100 gramos de carne 100% de res de la región sobre un pan Brioche fresco  con mayonesa, lechuga, tomate, queso, tocino y cebolla asada acompañada de papas fritas.
" descriptionEN="Two 100 grams beef patties with regional 100% ground beef on a freshly baked Brioche bun with mayonaise, lettuce, tomato, cheese, bacon and grilled onion, accompanied by french fries.
" price="139" />
          <Card image={coral} title="Coral" description="Una hamburguesa de 180 gramos de carne 100% de res de la región sobre un pan Brioche fresco  con mayonesa, lechuga, tomate, queso, tocino y cebolla asada, acompañada de papas fritas.
" descriptionEN="A 180 gram beef patty with regional 100% ground beef on a freshly baked Brioche bun with mayonaise, lettuce, tomato, cheese, bacon and grilled onion, accompanied by french fries.
" price="134"/>
          <Card image={manglar} title="Manglar" description="La Manglar una hamburguesa de 180 gramos de carne 100% de res de la región sobre un pan Brioche fresco  con mayonesa, lechuga, tomate, queso, tocino y champiñones, acompañada de papas fritas." descriptionEN="Manglar a 180 gram beef patty with regional 100% ground beef on a freshly baked Brioche bun with mayonaise, lettuce, tomato, cheese, bacon and mushrooms, accompanied by french fries.

" price="134"/>
          <Card image={hawaiiana} title="Hawaiiana" description="La Hawaiiana una hamburguesa de 180 gramos de carne 100% de res de la región sobre un pan Brioche fresco  con mayonesa, lechuga, tomate, queso, tocino, jamón y piña, acompañada de papas fritas.
" descriptionEN="Hawaiiana a 180 gram beef patty with regional 100% ground beef on a freshly baked Brioche bun with mayonaise, lettuce, tomato, cheese, bacon, ham and pineapple, accompanied by french fries.
" price="149"/>
          <Card image={ocean} title="Ocean" description="La Ocean una hamburguesa de 180 gramos de carne 100% de res de la región sobre un pan Brioche fresco  con mayonesa, lechuga, tomate, queso azul, tocino y cebolla asada, acompañada de papas fritas.
" descriptionEN="Ocean a 180 gram beef patty with regional 100% ground beef on a freshly baked Brioche bun with mayonaise, lettuce, tomato, blue cheese, bacon and grilled onion, accompanied by french fries.
" price="169"/>
 <Card image={smash} title="Smash Burger" description="Una hamburguesa de 80 gramos de carne 100% de res de la región sobre un pan Brioche fresco  con mayonesa, lechuga, tomate y queso.
" descriptionEN="A 80 gram beef patty with regional 100% ground beef on a freshly baked Brioche bun with mayonaise, lettuce, tomato and cheese.
" price="69"/>
          <Card image={casa} title="De La Casa" description="De la casa una hamburguesa de 180 gramos de carne 100% de res de la región sobre un pan Brioche fresco  con mayonesa, lechuga, tomate, queso, tocino, champiñones y piña, acompañada de papas fritas.
" descriptionEN="De la casa a 180 gram beef patty with regional 100% ground beef on a freshly baked Brioche bun with mayonaise, lettuce, tomato, cheese, bacon, mushrooms and pineapple, accompanied by french fries.
" price="149"/>
          <Card image={selva} title="Selva" description="La Selva una hamburguesa de 180 gramos de carne 100% de res de la región sobre un pan Brioche fresco  con mayonesa, lechuga, tomate, queso, tocino y guacamole, acompañada de papas fritas.
" descriptionEN="Selva a 180 gram beef patty with regional 100% ground beef on a freshly baked Brioche bun with mayonaise, lettuce, tomato, cheese, bacon and guacamole, accompanied by french fries." price="149" />
          <Card image={burger} title="Sandwich de Pollo" description="Una pieza de pollo a la cordón blue ,  con aguacate, lechuga y jitomate en Pan Brioche acompañado de papas" descriptionEN="Una pieza de pollo a la cordón blue ,  con aguacate, lechuga y jitomate en Pan Brioche acompañado de papas" price="149" />
 <div>
        <h1 className="font-SyneMono text-5xl md:text-6xl text-center text-yellow-500">Menu Infantil</h1>
          <Card image={burger} title="Playita" description="Una hamburguesa de 100 gramos de carne 100% de res de la región sobre un pan Brioche fresco con mayonesa, lechuga, tomate, queso y tocino, acompañada de papas fritas." descriptionEN="A 100 gram beef patty with regional 100% ground beef on a freshly baked Brioche bun with mayonaise, lettuce, tomato, cheese, and bacon, accompanied by french fries." price="89"/>
          <Card image={burger} title="Tropical" description="Una hamburguesa de 100 gramos de carne 100% de res de la región sobre un pan Brioche fresco con mayonesa, lechuga, tomate, queso, tocino y piña, acompañada de papas fritas." descriptionEN="A 100 gram beef patty with regional 100% ground beef on a freshly baked Brioche bun with mayonaise, lettuce, tomato, cheese, bacon and pinapple, accompanied by french fries." price="99"/>
        </div>

        <div>
          <h1 className="font-SyneMono text-5xl md:text-6xl text-center text-yellow-500">Hotdogs</h1>
          <Card image={hotdog} title="Hotdog del chef" description="Salchicha Krakauer con cebolla frita, cebolla fresca y Sweet Relish y mostaza acompañado de papas fritas" descriptionEN="Krakauer Sausage with Fried Onion, Fresh Onion and Sweet Relish and Mustard Accompanied by French Fries."price="114" />
        <div/>
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
            <h1 className="font-SyneMono text-5xl md:text-6xl text-center text-yellow-500">Sandwiches</h1>
            <Card image={burger} title="Sandwich Guacamaya" description="Pan Ciabatta con queso de cabra, manzana, miel maple, jamon Serrano y Arugula." price="130"/>
            <Card image={burger} title="Sandwich Pelicano" description="Pan Ciabatta con queso Mozarella, jamon Serrano y Arugula." price="125" />

            </div>
        <div>
          <h1 className="font-SyneMono text-5xl md:text-6xl text-center text-yellow-500">Bebidas</h1>
        </div>
          <Card image={soda} title="Coca Cola" price="30"/>
          <Card image={soda} title="Coca Cola Zero" price="30" />
          <Card image={soda} title="Mundet" price="30" /> 
          <Card image={soda} title="Peñafiel Limon" price="30" />
          <Card image={soda} title="Agua Natural" price="25" />
          {/* <Card image={soda} title="Agua Mineral" price="25" /> */}
          <Card image={soda} title="Agua de Limon con Chía" price="25"/>
          <Card image={soda} title="Agua de Jamaica" price="25"/>
          {/* <div>
            <h1 className="font-SyneMono text-5xl md:text-6xl text-center text-yellow-500">Combos</h1>
            <Card image={burger} title="Combo Individual" description="1 Playa Burger con papas y 1 bebida" descriptionEN="1 Playa burger with fries and 1 beverage" price="149"/>
            <Card image={burger} title="Combo Pareja" description="2 Playa burgers con papas y 2 bebidas" descriptionEN="2 Playa burgers with fries and 2 beverages" price="259"/>
            <Card image={burger} title="Combo Familiar" description="4 Playa burgers con papas y 4 bebidas" descriptionEN="4 Playa burgers with fries and 4 beverages" price="549"/>
          <Card image={burger} title="Combo Niños" description="1 Playita con  papas y un refresco" descriptionEN="1 Playita burger fries and one beverage" price="105" /> 
          </div> */}
       
        <div>
          <h1 className="font-SyneMono text-5xl md:text-6xl text-center text-yellow-500">Postres</h1>
          <Card image={burger} title="Pay de Zarzamora" price="30" />
          <Card image={burger} title="Pay de Piña" price="30" />
        </div>
      </div>
       </div> 
    </Layout>
  )
}

export default MenuPage;
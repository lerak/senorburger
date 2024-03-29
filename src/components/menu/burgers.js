import React from 'react'
import Burger from "../menu/burger"
import dobleSmash from "../../images/burgers/doblesmash.jpg"
import playa from "../../images/burgers/playa.jpg"
import coral from "../../images/burgers/coral.jpg"
import manglar from "../../images/burgers/manglar.jpg"
import ocean from "../../images/burgers/ocean.jpg"
import nohoch from "../../images/burgers/nohoch.jpg"
import selva from "../../images/burgers/selva.jpg"
import hawaiiana from "../../images/burgers/hawaiiana.jpg"
import smash from "../../images/burgers/smash.jpg"
import casa from "../../images/burgers/casa.jpg"
import burger from '../../images/hamburger-cheeseburger-veggie-burger-fast-food-burguer-d02a8de84e0ede0b8987bbe0f866487d.png'
function Burgers(){
  return(
    <>
    <div>
    <h1 id="hamburguesas" className="font-SyneMono text-5xl md:text-6xl text-center text-yellow-500 mb-10">Burgers</h1>
  </div><p></p> <p></p>
  <p className='text-yellow-500'>Elige tu tamaño: Mediano, servido con una suculenta hamburguesa de 90g, o Tamaño Rey, con una generosa hamburguesa de 180g</p>
  <p className='text-yellow-200'>Choose your size: Mediano, served with a juicy 90g beef patty, or Tamaño Rey, featuring a generous 180g beef patty</p>
  <p className='text-yellow-500'>¡Elige entre Arugula o lechuga en tu hamburguesa!</p>
  <p className='text-yellow-200'>Choose between Arugula or lettuce on your burger!</p>
<Burger image={playa} title="Playa" description="Una hamburguesa 100% carne de res de la región sobre un pan Brioche fresco  con mayonesa, lechuga, tomate, queso y tocino, acompañada de papas fritas.
" descriptionEN="A beef patty with regional 100% ground beef on a freshly baked Brioche bun with mayonaise, lettuce, tomato, cheese, and bacon, accompanied by french fries.
" price="154" pricem="99"/>
<Burger image={nohoch} title="Nohoch" description="La Nohoch una hamburguesa de 2 carnes de 180 gramos de carne 100% de res de la región sobre un pan Brioche fresco  con mayonesa, lechuga, tomate, queso, tocino y cebolla asada acompañada de papas fritas.
" descriptionEN="Two beef patties with regional 100% ground beef on a freshly baked Brioche bun with mayonaise, lettuce, tomato, cheese, bacon and grilled onion, accompanied by french fries.
" price="234" pricem="170" />
    <Burger image={dobleSmash} title="Double Smash" description="Una hamburguesa de 2 carnes de 100 gramos de carne 100% de res de la región sobre un pan Brioche fresco  con mayonesa, lechuga, tomate, queso, tocino y cebolla asada acompañada de papas fritas.
" descriptionEN="Two 100 grams beef patties with regional 100% ground beef on a freshly baked Brioche bun with mayonaise, lettuce, tomato, cheese, bacon and grilled onion, accompanied by french fries.
" price="164" pricem="110" />
    <Burger image={coral} title="Coral" description="Una hamburguesa 100% carne de res de la región sobre un pan Brioche fresco  con mayonesa, lechuga, tomate, queso, tocino y cebolla asada, acompañada de papas fritas.
" descriptionEN="A beef patty with regional 100% ground beef on a freshly baked Brioche bun with mayonaise, lettuce, tomato, cheese, bacon and grilled onion, accompanied by french fries.
" price="159" pricem="105"/>
    <Burger image={manglar} title="Manglar" description="La Manglar una hamburguesa 100%  carne de res de la región sobre un pan Brioche fresco  con mayonesa, lechuga, tomate, queso, tocino y champiñones, acompañada de papas fritas." descriptionEN="Manglar a gram beef patty with regional 100% ground beef on a freshly baked Brioche bun with mayonaise, lettuce, tomato, cheese, bacon and mushrooms, accompanied by french fries.

" price="159" pricem="105"/>
    <Burger image={hawaiiana} title="Hawaiiana" description="La Hawaiiana una hamburguesa 100% carne de res de la región sobre un pan Brioche fresco  con mayonesa, lechuga, tomate, queso, tocino, jamón y piña, acompañada de papas fritas.
" descriptionEN="Hawaiiana a beef patty with regional 100% ground beef on a freshly baked Brioche bun with mayonaise, lettuce, tomato, cheese, bacon, ham and pineapple, accompanied by french fries.
" price="169" pricem="115"/>
    <Burger image={ocean} title="Ocean" description="La Ocean una hamburguesa 100% carne de res de la región sobre un pan Brioche fresco  con mayonesa, lechuga, tomate, queso azul, tocino y cebolla asada, acompañada de papas fritas.
" descriptionEN="Ocean a beef patty with regional 100% ground beef on a freshly baked Brioche bun with mayonaise, lettuce, tomato, blue cheese, bacon and grilled onion, accompanied by french fries.
" price="179" pricem="125"/>
<Burger image={smash} title="Smash Burger" description="Una hamburguesa de 80 gramos de carne 100% de res de la región sobre un pan Brioche fresco  con mayonesa, lechuga, tomate y queso.
" descriptionEN="A 80 gram beef patty with regional 100% ground beef on a freshly baked Brioche bun with mayonaise, lettuce, tomato and cheese.
" price="79"/>
    <Burger image={casa} title="De La Casa" description="De la casa una hamburguesa 100% carne de res de la región sobre un pan Brioche fresco  con mayonesa, lechuga, tomate, queso, tocino, champiñones y piña, acompañada de papas fritas.
" descriptionEN="De la casa a beef patty with regional 100% ground beef on a freshly baked Brioche bun with mayonaise, lettuce, tomato, cheese, bacon, mushrooms and pineapple, accompanied by french fries.
" price="169" pricem="115"/>
    <Burger image={selva} title="Selva" description="La Selva una hamburguesa 100% carne de res de la región sobre un pan Brioche fresco  con mayonesa, lechuga, tomate, queso, tocino y guacamole, acompañada de papas fritas.
" descriptionEN="Selva a beef patty with regional 100% ground beef on a freshly baked Brioche bun with mayonaise, lettuce, tomato, cheese, bacon and guacamole, accompanied by french fries." price="169" pricem="115" />
    <Burger image={burger} title="Sandwich de Pollo" description="Una pieza de pollo a la cordón blue ,  con aguacate, lechuga y jitomate en Pan Brioche acompañado de papas" descriptionEN="Una pieza de pollo a la cordón blue ,  con aguacate, lechuga y jitomate en Pan Brioche acompañado de papas" price="169" />
{/* <div>
  <h1 className="font-SyneMono text-5xl md:text-6xl text-center text-yellow-500">Menu Infantil</h1>
    <Burger image={burger} title="Playita" description="Una hamburguesa de 100 gramos de carne 100% de res de la región sobre un pan Brioche fresco con mayonesa, lechuga, tomate, queso y tocino, acompañada de papas fritas." descriptionEN="A 100 gram beef patty with regional 100% ground beef on a freshly baked Brioche bun with mayonaise, lettuce, tomato, cheese, and bacon, accompanied by french fries." price="114"/>
    <Burger image={burger} title="Tropical" description="Una hamburguesa de 100 gramos de carne 100% de res de la región sobre un pan Brioche fresco con mayonesa, lechuga, tomate, queso, tocino y piña, acompañada de papas fritas." descriptionEN="A 100 gram beef patty with regional 100% ground beef on a freshly baked Brioche bun with mayonaise, lettuce, tomato, cheese, bacon and pinapple, accompanied by french fries." price="119"/>
  </div> */}
  </>
  )
}

export default Burgers
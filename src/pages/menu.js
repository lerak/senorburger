import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/card'
import burger from '../images/BURGERBAR_campagne-website_BURGER_01.png'
import fries from '../images/fries.png'
import soda from '../images/soda.png'
// import burger from '../images/hamburger-cheeseburger-veggie-burger-fast-food-burguer-d02a8de84e0ede0b8987bbe0f866487d.png'
import "./menu.css"
function MenuPage() {
  
  return(
    <Layout>
      <SEO />
      <div>
        <div>
          <h1 className="font-SyneMono text-7xl md:text-8xl  text-center text-yellow-500">Burgers</h1>
        </div>
        <div className="text-white">
        * <ul>
            <li>Pan Brioche</li>
            <li>Cambia la Lechuga por Arugula tiene un costo de $5 </li>
          </ul> 
        </div>
          <Card image={burger} title="Playa Burger" description="Carne con tocino, lechuga, jitomate y queso, acompañada de papas " price={70}/>
          <Card image={burger} title="Coral Burger" description="Carne con tocino, lechuga, jitomate, queso y cebolla asada, acompañada de papas" price="75"/>
          <Card image={burger} title="Manglar Burger" description="Carne con tocino, lechuga, jitomate, queso y champiñones, acompañada de papas" price="80"/>
          <Card image={burger} title="Hawaiiana Burger" description="Carne con tocino, lechuga, jitomate,  queso, jamonon y piña, acompañada de papas" price="85"/>
          <Card image={burger} title="Ocean Burger" description="Carne con tocino, lechuga, jitomate, cebolla asada y queso azul, acompañada de papas" price="100"/>
          <Card image={burger} title="De La Casa" description="Carne con tocino, lechuga, jitomate, champiñones y piña, acompañada de papas" price="95"/>
          <div>
          <h1 className="font-SyneMono text-7xl md:text-8xl  text-center text-yellow-500">Extras</h1>
        </div>
          <Card title="Extra tocino"  price="10"/>
          <Card title="Extra champinones" price="10"/>
          <Card title="Extra cebolla asada" price="10" />
        <div>
          <h1 className="font-SyneMono text-7xl md:text-8xl  text-center text-yellow-500">Papas</h1>
        </div>
          <Card image={fries} title="Papas a la Francesa" description="Porcion de papas" price="40"/>
          <Card image={fries} title="Papas a la Francesa con Queso" description="porcion de papas con queso amarillo" price="50"/>
        <div>
          <h1 className="font-SyneMono text-7xl md:text-8xl  text-center text-yellow-500">Refrescos</h1>
        </div>
          <Card image={soda} title="Coca Cola" price="18"/>
          <Card image={soda} title="Agua de Tamarindo" price="18"/>
          <Card image={soda} title="Agua de Jamaica" price="18"/>
          <Card image={soda} title="Agua de Horchata" price="18"/>
      </div>
    </Layout>
  )
}

export default MenuPage;
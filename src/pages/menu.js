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
          <h1 className="font-SyneMono text-5xl md:text-6xl text-center text-yellow-500">Burgers</h1>
        </div>
    
          <Card image={burger} title="Playa" description="180gr de carne, tocino, lechuga, jitomate y queso, acompañada de papas " price="80"/>
          <Card image={burger} title="Coral" description="180gr de carne, tocino, lechuga, jitomate, queso y cebolla asada, acompañada de papas" price="85"/>
          <Card image={burger} title="Manglar" description="180 de carne, tocino, lechuga, jitomate, queso y champiñones, acompañada de papas" price="85"/>
          <Card image={burger} title="Hawaiiana" description="180gr de carne, tocino, lechuga, jitomate,  queso, jamon y piña, acompañada de papas" price="95"/>
          <Card image={burger} title="Ocean" description="180gr de carne, tocino, lechuga, jitomate, cebolla asada y queso azul, acompañada de papas" price="110"/>
          <Card image={burger} title="De La Casa" description="180gr de carne, tocino, lechuga, jitomate, queso, champiñones y piña, acompañada de papas" price="95"/>
          <Card image={burger} title="Nohoch" description="2 carnes de 180gr, doble tocino, lechuga, jitomate, queso y cebolla asada, acompañada de papas" price="130" />
          <Card image={burger} title="Selva" description="180gr de carne, tocino, lechuga, jitomate, queso y guacamole, acompañada de papas" price="95" />
          <div>
          <h1 className="font-SyneMono text-5xl md:text-6xl text-center text-yellow-500">Extras</h1>
        </div>
          <Card title="Extra Carne" price="40"/>
          <Card title="Cambia la Lechuga por Arugula" price="15"/>
          <Card title="Extra tocino"  price="25"/>
          <Card title="Extra champiñones" price="10"/>
          <Card title="Extra cebolla asada" price="10" />
          <Card title="Extra Queso Americano" price="10" />
        <div>
          <h1 className="font-SyneMono text-5xl md:text-6xl text-center text-yellow-500">Papas</h1>
        </div>
          <Card image={fries} title="Papas a la Francesa" description="Porcion de papas" price="45"/>
          <Card image={fries} title="Papas a la Francesa con Queso" description="porcion de papas con queso amarillo" price="50"/>
        <div>
          <h1 className="font-SyneMono text-5xl md:text-6xl text-center text-yellow-500">Refrescos</h1>
        </div>
          <Card image={soda} title="Coca Cola" price="25"/>
          <Card image={soda} title="Coca Cola Zero" price="25" />
          <Card image={soda} title="Mundet" price="25" /> 
          <Card image={soda} title="Agua de Limon" price="20"/>
          <Card image={soda} title="Agua de Jamaica" price="20"/>
          <div>
          <h1 className="font-SyneMono text-5xl md:text-6xl text-center text-yellow-500">Combos</h1>
          <Card title="Combo Individual" description="1 Playa Burger con papas y 1 refresco" price="95"/>
          <Card title="Combo Pareja" description="2 Playa burgers con papas y 2 refrescos" price="185"/>
          <Card title="Combo Familiar" description="4 Playa burgers con papas y 4 refrescos" price="365"/>
        </div>
      </div>
        
    </Layout>
  )
}

export default MenuPage;
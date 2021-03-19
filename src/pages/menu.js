import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/card'
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
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        <div>
          <h1 className="font-SyneMono text-7xl md:text-8xl  text-center text-yellow-500">Extras</h1>
        </div>
          <Card />
          <Card />
          <Card />
        <div>
          <h1 className="font-SyneMono text-7xl md:text-8xl  text-center text-yellow-500">Refrescos</h1>
        </div>
          <Card />
          <Card />
          <Card />
          <Card />
      </div>
    </Layout>
  )
}

export default MenuPage;
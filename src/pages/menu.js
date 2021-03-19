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
        {/* <div className="grid grid-cols-4 text-white">
          <div className="1">Hamburguesas</div>
          <div className="2">Extras</div>
          <div className="3">Refrescos</div>
          <div className="4">4</div>
        </div> */}
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </div>
    </Layout>
  )
}

export default MenuPage;
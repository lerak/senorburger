import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/card'
function MenuPage() {
  return(
    <Layout>
      <SEO />
      <div>
      <h3 className="text-white">Menu Page</h3>
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
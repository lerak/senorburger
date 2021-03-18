import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import floatingIMG from "../images/food-truck-commercial-vehicle-car-barbecue-van-foodtruck-d8567dbea05b2233cae696c9fc884b21.png"


function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <div className="grid gap-4">
        <section className=" col-span-1">
          <img src={floatingIMG} alt=""/>
        </section>
       <section className=" col-span-2">
        <h2 className="text-3xl text-yellow-500">Senor burrrrrrr</h2>
        <p className="text-white font-SyneMono">Nuestro menú es una combinación de sabores ya que usamos los mejores ingredientes para deleitarte.</p> <p>Nuestra carne es escogida y preparada diariamente</p>
        <button className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded">
          Our Menu
          Button
        </button>
       </section>
      </div>
    </Layout>
  );
}

export default IndexPage;

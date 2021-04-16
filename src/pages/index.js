import React from "react";
import {Link} from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";
import floatingIMG from "../images/BURGERBAR_campagne-website_BURGER_01.png"
import cow from "../images/BURGERBAR_cow-02.png"
import exampleburger from "../images/frontpage/gourmet-burgers-08dc989379929b29507ccff42c583bc0.png"

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`señor burger`, `burger playa del carmen`, `hamburguesa playa del carmen`]}
        title="Home"
      />
      <div className="container grid gap-4">
        <section className=" col-span-1">
          <img src={floatingIMG} alt=""/>
        </section>
       <section className=" col-span-2">
        <h2 className="mb-5 text-3xl text-yellow-500 font-SyneMono">Que hacemos es sencillo, son hamburguesas artesanales.</h2>
        <p className="text-white">Nuestro menú es una combinación de sabores ya que usamos los mejores ingredientes para deleitarte.</p> <p className="text-white">Nuestra carne es escogida y preparada diariamente</p>
        <p className="text-white  mb-10">Para no perder ese toque de frescura que nos caracteriza, una fusión de estilo europeo y mexicano</p>
        <Link to="/menu" className="mt-10 self-center bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded" >
          Nuestro Menu
        </Link>
       </section>


       <section>
       <div className="col-span-1">
        <img src={cow} />
        </div>
       </section>
       <section className=" col-span-2 text-2xl">
        <p className="text-gray-300">Comenzando con los ingredientes naturales más frescos, comienza su experiencia Señor Burger.</p> <p className="text-white">Bollos de hamburguesa horneados localmente, lechuga crujiente, rúcula, tomate y pepinillos en la hamburguesa que elijas</p>
        <p className="text-white">Las hamburguesas se preparan individualmente a pedido y se cocinan mientras espera.</p><p className="text-white"> Con solo sal marina molida y pimienta negra agregada a su hamburguesa, mientras está chisporroteando sobre la plancha.</p>
        
       </section>
       Comenzando con los ingredientes naturales más frescos, comienza su experiencia Burgerbar. Bollos de hamburguesa horneados localmente, lechuga iceberg crujiente, rúcula, tomate y pepinillos en la hamburguesa que elijas

      </div>
      <section className="grid grid-cols-3 gap-4">
        <div className="text-white"><img src={exampleburger} alt=""/></div>
        <div className="text-white"><img src={exampleburger} alt=""/></div>
        <div className="text-white"><img src={exampleburger} alt=""/></div>
      </section>
    </Layout>
  );
}

export default IndexPage;

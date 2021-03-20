import React from "react";
import {Link} from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";
import floatingIMG from "../images/food-truck-commercial-vehicle-car-barbecue-van-foodtruck-d8567dbea05b2233cae696c9fc884b21.png"
import illustration from "../images/frontpage/ilustration.png"
import burger  from "../images/frontpage/hamburger-cheeseburger-slider-french-fries-hot-dog-burger-39e6cb9006fab1a7beec639e5a0f976c.png"
import fries from "../images/frontpage/hamburger-french-fries-doughnut-fast-food-pizza-hd-fries-bd0ee40b5af8bd3514f0d6531658b4f5.png"
import gourmet from "../images/frontpage/gourmet-burgers-08dc989379929b29507ccff42c583bc0.png"
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
        <h2 className="mb-5 text-3xl text-yellow-500 font-SyneMono">Que hacemos es sencillo, que hacemos son hamburguesas artesanales.</h2>
        <p className="text-white">Nuestro menú es una combinación de sabores ya que usamos los mejores ingredientes para deleitarte.</p> <p classNameNameNameName="text-white font-SyneMono">Nuestra carne es escogida y preparada diariamente</p>
        <p className="text-white  mb-10">Para no perder ese toque de frescura que nos caracteriza, una fusión de estilo europeo y mexicano</p>
        <Link to="/menu" className="mt-10 self-center bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded" >
          Nuestro Menu
        </Link>
       </section>


       <section>
       <div className="container mx-auto p-8">
        <div className="flex flex-row flex-wrap ">
          <div className="w-full md:w-1/2 h-64 md:h-auto mb-4 px-2">
            <img className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover" src={illustration} alt=""/>
          </div>
          <div className="w-full md:w-1/2 mb-4 px-2">
            <div className="flex flex-col sm:flex-row md:flex-col -mx-2">
              <div className="w-full sm:w-1/2 md:w-full h-48 xl:h-64 mb-4 sm:mb-0 md:mb-4 px-2">
              <img className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover" src={burger} alt=""/>
              </div>
              <div className="w-full sm:w-1/2 md:w-full h-48 xl:h-64 px-2">
              <img className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover" src={fries} alt=""/>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/3 h-32 md:h-48 mb-4 sm:mb-0 px-2">
          <img className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover" src={gourmet} alt=""/>
          </div>
          <div className="w-full sm:w-1/3 h-32 md:h-48 mb-4 sm:mb-0 px-2">
          <img className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover" src={gourmet} alt=""/>
          </div>
          <div className="w-full sm:w-1/3 h-32 md:h-48 px-2">
          <img className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover" src={gourmet} alt=""/>
          </div>
        </div>
      </div>
       </section>
      </div>
    </Layout>
  );
}

export default IndexPage;

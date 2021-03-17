import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import floatingIMG from "../images/hamburger-cheeseburger-veggie-burger-fast-food-burguer-d02a8de84e0ede0b8987bbe0f866487d.png"


function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <div className="grid grid-cols-3 gap-4">
    <section className=" col-span-1">
      <h2 className="text-3xl text-yellow-500">Senor burrrrrrr</h2>
      <p className="text-white font-SyneMono">Nuestro menú es una combinación de sabores ya que usamos los mejores ingredientes para deleitarte.</p> <p>Nuestra carne es escogida y preparada diariamente</p>
      <button className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded">
        Our Menu
  Button
</button>
    </section>
    <section className=" col-span-2">
      <img src={floatingIMG} alt=""/>
    </section>
    </div>
    </Layout>
  );
}

export default IndexPage;

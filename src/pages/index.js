import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import floatingIMG from "../images/Floating-burger-transparent-background-PNG.png"


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
      <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, dicta.</p>
    </section>
    <section className=" col-span-2">
      <img src={floatingIMG} alt=""/>
    </section>
    </div>
    </Layout>
  );
}

export default IndexPage;

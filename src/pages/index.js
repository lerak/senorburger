import React from "react";
import {Link} from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";
import floatingIMG from "../images/burgers/doblesmash.jpg"
//import floatingIMG from "../images/BURGERBAR_campagne-website_BURGER_01.png"
import cow from "../images/burgers/hawaiiana.jpg"
//import exampleburger from "../images/frontpage/gourmet-burgers-08dc989379929b29507ccff42c583bc0.png"
import burgersjoint from "../images/frontpage/rsz_img_3762 copy.jpg"
// import burgers from "../images/rsz_img_3762 copy_preview_rev_1.png"
function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`señor burger`, `burger playa del carmen`, `hamburguesa playa del carmen`]}
        title="Home"
      />
      <div className="container grid gap-4">
        <section className="flex justify-center drop-shadow-2xl">
          <img className="border-2 border-gray-700 " src={floatingIMG} alt=""/>
        </section>
       <section className=" col-span-2">
        <h2 className="mb-5 text-3xl text-yellow-500 font-SyneMono">Que hacemos es sencillo, son hamburguesas artesanales.</h2>
        <p className="text-white font-SyneMono">Nuestro día comienza con la preparación, picando ingredientes frescos.<p className="text-white">Nuestras hamburguesas están hechas a mano y hechas 100 % con carne de res con  certificado TIF de origen local de granjas de ganado en Tizimin estado de Yucatan.</p><p className="text-white">Ingredientes de origen local para apoyar a nuestra comunidad manteniendo estrictos estándares de calidad que nunca comprometen la calidad y la integridad de nuestros alimentos.</p><p className="text_white">Ponemos amor en nuestra comida y puedes saborearla.</p>
</p><br></br><br></br>
        <Link to="/menu" className="mt-10 self-center bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded" >
          Nuestro Menu
        </Link>
        <br /><br /><br />
       </section>
      

       <section>
       <div className="col-span-1">
        <img src={cow} />
        </div>
       </section>
       <section className=" col-span-2 text-1xl font-SyneMono">
        <p className="text-white">Comenzando con los ingredientes naturales más frescos, comienza su experiencia Señor Burger.</p> <p className="text-white">Bollos de hamburguesa horneados localmente, lechuga crujiente, rúcula, tomate y pepinillos en la hamburguesa que elijas</p>
        <p className="text-white">Las hamburguesas se preparan individualmente a pedido y se cocinan mientras espera.</p><p className="text-white"> Con solo sal marina molida y pimienta negra agregada a su hamburguesa, mientras está chisporroteando sobre la plancha.</p>
        
       </section>
       Comenzando con los ingredientes naturales más frescos, comienza su experiencia Burgerbar. Bollos de hamburguesa horneados localmente, lechuga iceberg crujiente, rúcula, tomate y pepinillos en la hamburguesa que elijas

      </div>
      <section className="grid grid-cols-1 gap-4">
        <div className="text-white"><img className="border-2 border-gray-700" src={burgersjoint} alt=""/></div>
      </section>
    </Layout>
  );
}

export default IndexPage;

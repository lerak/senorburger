import React from "react";
// import {Link} from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";
// import floatingIMG from "../images/burgers/doblesmash.jpg"
import floatingIMG from "../images/frontpage/vacas.jpg"
//import floatingIMG from "../images/BURGERBAR_campagne-website_BURGER_01.png"
import cow from "../images/frontpage/vaca.jpg"
//import exampleburger from "../images/frontpage/gourmet-burgers-08dc989379929b29507ccff42c583bc0.png"
// import burgers from "../images/rsz_img_3762 copy_preview_rev_1.png"
function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`señor burger`, `grass fed meat playa del carmen`, `hamburguesa playa del carmen`]}
        title="Meat"
      />
      <div className="container grid gap-4">
     

        <section className="flex md:col-span-1 col-span-1">
          <h1 className="text-yellow-500 text-5xl">The Origin of our meat</h1> 
          <img className="border-2 border-gray-700 " src={floatingIMG} alt=""/> 
        </section>
       <section className=" col-span-2 text-white">
        <br /><br />
       <p>The  cows in Tizimin Yucatan are raised in a traditional and sustainable way, following the principles of grass-fed beef production. These cows are raised on natural pastures where they are able to graze on a variety of grasses, herbs, and legumes. This natural diet, combined with the semi-arid climate of the region, results in a unique flavor and texture in the meat.
</p><br /><br /><p>One of the main benefits of grass-fed beef is that it is leaner than grain-fed beef, which means that it contains less fat and calories. Additionally, it is also a good source of omega-3 fatty acids, vitamins, and minerals. Grass-fed beef is also higher in conjugated linoleic acid (CLA), a natural fatty acid that has been linked to many health benefits such as reducing the risk of cancer and heart disease. The CLA content in grass-fed beef is 2-3 times higher than grain-fed beef, making it a healthier option for consumers.
</p><br /><br />
<div className="col-span-1">
        <img src={cow} />
        </div>
        <br /><br />
<p>The farmers in Tizimin Yucatan also make sure that the cows are not given hormones or antibiotics, as this can negatively affect the meat&apos;s taste and quality, and can also be harmful to the consumer&apos;s health. This results in a high-quality, natural, and healthy meat that is free of any artificial or harmful substances.
</p><p>The traditional and sustainable practices used in the Yucatan beef production also help to support the local economy and the environment. By choosing to use meat from Yucatan, Señor Burger is not only providing their customers with delicious and healthy burgers, but also supporting local farmers and their traditional methods. This kind of practices are vital for the preservation of the local culture and traditions, and for the development of the region.
</p><br /><br /><p>Furthermore, Tizimin Yucatan&apos;s beef production also helps to maintain the natural balance of the local ecosystem. The cows are raised on natural pastures, which helps to preserve the local flora and fauna. The farmers also use sustainable practices to minimize their impact on the environment, such as reducing the use of pesticides and fertilizers, and promoting the conservation of water resources.
</p><p>In summary, Yucatan&apos;s beef production stands out for its traditional and sustainable practices, where Brahma cows are raised on natural pastures, fed with natural feed and not given hormones or antibiotics.
</p>
       </section>
    

       </div>
    </Layout>
  );
}

export default IndexPage;

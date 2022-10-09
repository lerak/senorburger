import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

function PromoPage() {
  return(
    <Layout>
      <Seo/>
      <div className='text-center'>
        <div className='mb-8'>
          <h1 className='font-SyneMono text-5xl md:text-6xl text-center text-yellow-500'>Promos</h1>
          {/* <p className='font-SyneMono text-yellow-200 text-1xl md:t'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut consectetur quas eos unde, nostrum exercitationem ad non consequatur laudantium excepturi!</p> */}
        </div>
        <div>
          <h2 className='font-SyneMono text-4xl md:text-4xl text-center text-white my-5'>Lunes</h2>
          <p className='font-SyneMono text-yellow-200 text-1xl md:t'>En compra de 2 Smash Burgers llevate una orden de papas gratis!</p>
        </div>
        <div>
          <h2 className='font-SyneMono text-4xl md:text-4xl text-center text-white my-5'>Miércoles</h2>
          <p className='font-SyneMono text-yellow-200 text-1xl md:t'>15% descuento en todo el Menu</p>
        </div>
        <div>
          <h2 className='font-SyneMono text-4xl md:text-4xl text-center text-white my-5'>Jueves</h2>
          <p className='font-SyneMono text-yellow-200 text-1xl md:t'>En compra de 2 Playa Burgers un porcion de Dedos de queso gratis!</p>
        </div>
      </div>
    </Layout>
    
    )
}

export default PromoPage;
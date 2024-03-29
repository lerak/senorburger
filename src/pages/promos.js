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
          <h2 className='font-SyneMono text-4xl md:text-4xl text-center text-white my-5'>Miércoles</h2>
          <p className='font-SyneMono text-yellow-200 text-1xl md:t'>15% de descuento en todas las hamburguesas</p>
        </div>
      </div>
    </Layout>
    
    )
}

export default PromoPage;
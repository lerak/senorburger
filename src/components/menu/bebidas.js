import React from 'react'
import soda from '../../images/soda.png'
import Bebida from '../menu/bebida'
function Bebidas(){
  return(
    <>
    <div>
          <h1 id="bebidas" className="font-SyneMono text-5xl md:text-6xl text-center text-yellow-500">Bebidas</h1>
        </div>
          <Bebida image={soda} title="Coca Cola" price="40"/>
          <Bebida image={soda} title="Coca Cola Zero" price="40" />
          <Bebida image={soda} title="Mundet" price="40" /> 
          <Bebida image={soda} title="Peñafiel Limon" price="40" />
          <Bebida image={soda} title="Agua Natural" price="25" />
          {/* <Card image={soda} title="Agua Mineral" price="25" /> */}
          <Bebida image={soda} title="Agua de Limon" price="45"/>
          <Bebida image={soda} title="Agua de Jamaica" price="45"/>
          <Bebida image={soda} title="Mojito sin Alcohol" price="55" />
          <Bebida image={soda} title="Cafe Americano" price="35" />
  </>
  )
}

export default Bebidas
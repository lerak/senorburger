import React from 'react'

import Extra from '../menu/extra'
function Extras(){
  return(
    <>
    <div>
          <h1 className="font-SyneMono text-5xl md:text-6xl text-center text-yellow-500">Extras</h1>
          <Extra title="Extra tocino"  price="25"/>
          <Extra  title="Extra champiñones" price="15"/>
          <Extra title="Extra cebolla asada" price="15" />
          <Extra title="Extra Cebolla cruda" price="15" />
          <Extra title="Extra Piña" price="15" />
          <Extra title="Extra Queso Americano" price="10" />
          <Extra title="Extra Aguacate" price="20" />
          <Extra title="Orden de Guacamole" price="50" />
          </div>
  </>
  )
}

export default Extras
import React from 'react'
import delacasa from '../images/delacasa.jpeg'

function Card(){
  return(
    <div className="flex items-stretch grid grid-cols-3 gap-10 bg-gray-800 text-white rounded p-5 m-5">
        <div className="1">
          <div className="border-b-2 border-white pb-3">
          <h4 className="text-center text-yellow-500">Playa Burger</h4>
          </div>
          <div className="p-4 ">
             <img className="rounded object-cover w-full h-25"src={delacasa} alt=""/>
          </div>
        
        </div>
        <div className="c2 self-center">
          <p>Carne con tocino, jitomate</p><p>y queso.</p>
        </div>
        <div className="col3 self-center">$3333</div>
      </div>
  )
}

export default Card
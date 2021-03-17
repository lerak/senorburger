import React from 'react'
import delacasa from '../images/delacasa.jpeg'

function Card(){
  return(
    <div className="grid grid-cols-3 bg-gray-800 text-white rounded p-5 m-5">
        <div className="1">
          <div className="border-b-2 border-white p-t-3">
          <h4 className="text-yellow-500">Playa Burger</h4>
          </div>
          <div className="p-4 ">
             <img className="rounded object-cover w-full h-25"src={delacasa} alt=""/>
          </div>
        
        </div>
        <div className="c2">
          <p>Carne con tocino, jitomate</p><p>y queso.</p>
        </div>
        <div className="col3">$3333</div>
      </div>
  )
}

export default Card
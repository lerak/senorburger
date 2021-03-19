import React from 'react'
import delacasa from '../images/Chips-Burger.png'


function Card(){
  return(
    <div>
      <div className="z-1 overflow-visible flex items-stretch grid grid-cols-3 gap-10  text-white rounded p-5 m-5">
          <div className="1 self-center">
            <div className="p-4 ">
              <img className="rounded object-cover"src={delacasa} alt=""/>
            </div>
          </div>
          <div className="c2 self-center ">
            <div className="">
              <h4 className=" text-2xl md:text-3xl  font-SyneMono text-white">Playa <span className="text-gray-400">Burger</span></h4>
            </div>
            <p className="text-yellow-500 text-1xl md:text-2xl">Carne con tocino, jitomate y queso</p>
          </div>
          <div className="self-center text-yellow-500 text-4xl md:text-6xl">$65</div>
      </div>
    </div>
  )
}

export default Card
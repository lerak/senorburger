import React from 'react'
import delacasa from '../images/Chips-Burger.png'


function Card(){
  return(
    <div>
    <div className="z-1 overflow-visible flex items-stretch grid grid-cols-3 gap-10 bg-gray-800 text-white rounded p-5 m-5">
        <div className="1">
          <div className="border-b-2 border-white pb-3">
          <h4 className="text-center text-yellow-500">Playa Burger</h4>
          </div>
          <div className="p-4 ">
             <img className="rounded object-cover w-full h-25"src={delacasa} alt=""/>
          </div>
        
        </div>
        <div className="c2 self-center font-SyneMono ">
          <p>Carne con tocino, jitomate</p><p>y queso.</p>
        </div>
        <div className="col3 self-center">$3333</div>
      </div>


<div className=" bg-gray-900">
<div className="flex ">
  
  <div className="h-full text-center px-4 py-4 bg-gray-800 w-full justify-end border-t-2 border-gray-900">
    <a to="jobdet" className="flex items-center flex-wrap">
      <img alt="testimonial" className="inline-block object-cover object-center w-32 h-32 mb-4 rounded" src={delacasa} /> <span className="flex flex-col flex-grow pl-4">
        <span className="font-bold text-lg text-gray-100 -mt-4">Software developer </span>
        <span className="text-sm text-gray-500 uppercase font-bold">Carne con tocino, jitomate

y queso.</span>
      </span>
    </a>
    <div className="flex items-center flex-wrap ">
<a to="jobdet" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 px-2 py-1 border-2 border-indigo-500 rounded-full text-sm">De La Casa
</a>
<span className="self-center text-gray-100 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 px-2 bg-yellow-500 rounded-full">
$90
</span>


</div>
  </div>

  </div>
  </div>

</div>
  )
}

export default Card
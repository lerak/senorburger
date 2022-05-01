import React from 'react'
import PropTypes from 'prop-types';



function Card(props){
  return(
    <div>
      <div className="z-1 overflow-visible flex items-stretch grid grid-cols-2 gap-10  text-white rounded p-5 m-5">
          <div className="1 mt-10">
            <div className="p-2">
              <img className="border-2 border-gray-700  object-cover"src={props.image} alt=""/>
            </div>
          </div>
          <div className="c2 self-center ">
            <div className="">
              <h4 className=" text-2xl md:text-3xl  font-SyneMono text-white">{props.title}</h4>
            </div>
            <p className="mb-5 font-SyneMono text-yellow-500 text-1xl md:text-2xl">{props.description}</p>
            <p className="font-SyneMono text-yellow-200 text-1xl md:text-2xl">{props.descriptionEN}</p>
            <div className="self-center text-white text-1xl md:text-2xl">{props.price}</div> 
          </div>
      </div>
    </div>
  )
}


Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  descriptionEN: PropTypes.string,
  price: PropTypes.any, 
  image: PropTypes.any
};

export default Card
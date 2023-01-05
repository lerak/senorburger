import React from 'react'
import PropTypes from 'prop-types';



function Bebida(props){
  return(
    <div>
      <div className="text-center z-1 overflow-visible flex  grid grid-cols-1 gap-1  text-white rounded p-5 m-2">
        
          <div className="1 mt-10">
            <div className="p-2">
            <h4 className="visible md:invisible text-2xl md:text-3xl  font-SyneMono text-yellow-500">{props.title}</h4>
              {/* {props.image ? <img className="mt-5 border-2 border-gray-700  object-cover"src={props.image} alt=""/> : <p></p>}  */}
              {/* <img className="mt-5 border-2 border-gray-700  object-cover"src={props.image} alt=""/> */}
            </div>
          </div>
          <div className="c2 self-center ">
            <div className="invisible md:visible">
              <h4 className=" text-2xl md:text-3xl  font-SyneMono text-yellow-500">{props.title}</h4>
            </div>
            {/* <p className="mb-5 font-SyneMono text-yellow-500 text-1xl md:text-2xl">{props.description}</p>
            <p className="font-SyneMono text-yellow-200 text-1xl md:text-2xl">{props.descriptionEN}</p> */}
            <div className="self-center text-white text-1xl md:text-2xl">{props.price}</div>
          </div>
      </div>
    </div>
  )
}


Bebida.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  descriptionEN: PropTypes.string,
  price: PropTypes.any,
  pricem: PropTypes.any, 
  image: PropTypes.any
};

export default Bebida
import React from 'react'
// import SEO from '../components/seo'
import Header from '../components/header'
// import Layout from '../components/layout'
import Iframe from '../components/iframe'

import "@fontsource/syne-mono" 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faTripadvisor,
  faGoogle,
  faInstagram,
  faWhatsapp
  
} from '@fortawesome/free-brands-svg-icons'

import location from '../images/locaties.png'

function PedidosPage(){
   
  return(
    <div>
      <Header />
      <Iframe source="https://menu.fu.do/se%C3%B1orburger1" />
     
     
      <footer className="border-t-4 border-yellow-500 bg-black ">
        <nav className="flex flex-wrap items-stretch justify-between max-w-2xl md:max-w-4xl p-4 mx-auto text-sm md:p-8">
        <div className="self-center">
        <h3 className="font-bold text-white text-2xl">Contacto</h3>
            <hr  className="mb-4"/>
            <a href="https://goo.gl/maps/ANUdiKU2Bjqt8XR89" rel="nofollow"><img className="w-32 h-48" src={location} alt="Location"/></a>
            <p className="text-white">Av. Solidaridad entre </p><p className="text-white">Av Misión del Carmen</p><p className="text-white"> local 6</p>
            <p className="text-white"><a href="tel:9841864986">tel. 984 186 4986</a></p>
            <button className="my-4 text-white bg-transparent font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"><a href="https://wa.me/529841864986"><FontAwesomeIcon icon={faWhatsapp} size="1x" /> Whatsapp</a></button>
          </div>
         <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-white self-center">
            <div><a href="https://www.facebook.com/SenorBurgerPlayadelCarmen"><FontAwesomeIcon icon={faFacebook} size="3x" /></a></div>
            <div><a href="https://www.instagram.com/senorburgerplayadelcarmen"><FontAwesomeIcon icon={faInstagram} size="3x" /></a></div>
            <div><a href="https://www.tripadvisor.com/Restaurant_Review-g150812-d23165679-Reviews-Senor_Burger-Playa_del_Carmen_Yucatan_Peninsula.html?m=19905"><FontAwesomeIcon icon={faTripadvisor} size="3x" /></a></div>
            <div><a href="https://goo.gl/maps/ANUdiKU2Bjqt8XR89"><FontAwesomeIcon icon={faGoogle} size="3x" /></a></div>
          </div>

          <p>
            <h3 className="font-bold text-white text-2xl">Horario</h3>
            <hr className="mb-4" />
            <ul className="text-gray-400 text-1xl">
              <li>Lunes 16:00 - 23:00</li>
              <li>Martes Cerrado</li>
              <li>Miercoles 16:00 - 23:00</li>
              <li>Jueves 14:00 - 23:00</li>
              <li>Viernes 14:00 - 23:00</li>
              <li>Sabado 14:00 - 23:00</li>
              <li>Domingo 14:00 - 23:00</li> 
            </ul>
          </p>
        </nav>
      </footer>
    </div>
  
 
  )
}

export default PedidosPage;
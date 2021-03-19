import PropTypes from "prop-types";
import React from "react";
import "@fontsource/syne-mono" 
import Header from "./header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faTripadvisor,
  faGoogle,
  faInstagram
  
} from '@fortawesome/free-brands-svg-icons'

function Layout({ children }) {
  return (
    <div className=" flex flex-col min-h-screen font-sans text-gray-900 bg-gray-900">
      <Header />

      <main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>

      <footer className="border-t-4 border-yellow-500 bg-black ">
        <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
          <div className="text-white">
            <h3>Contacto</h3>
            <p>Tel. 9841776607</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-white">
            <div><a href="https://www.facebook.com/SenorBurgers" rel="nofollow"><FontAwesomeIcon icon={faFacebook} size="3x" /></a></div>
            <div><a href="" rel="nofollow"><FontAwesomeIcon icon={faInstagram} size="3x" /></a></div>
            <div><a href="https://www.tripadvisor.com/Restaurant_Review-g150812-d23165679-Reviews-Senor_Burger-Playa_del_Carmen_Yucatan_Peninsula.html?m=19905" rel="nofollow"><FontAwesomeIcon icon={faTripadvisor} size="3x" /></a></div>
            <div><a href="https://goo.gl/maps/ANUdiKU2Bjqt8XR89" rel="nofollow"><FontAwesomeIcon icon={faGoogle} size="3x" /></a></div>
          </div>

          <p>
            <h3 className="font-bold text-white">Horario</h3>
            <ul className="text-white">
              <li>Lunes Cerrado</li>
              <li>Martes 15:00 - 22:00</li>
              <li>Miercoles 15:00 - 22:00</li>
              <li>Jueves 15:00 - 22:00</li>
              <li>Sabado 15:00 - 22:00</li>
              <li>Domingo 15:00 - 22:00</li> 
            </ul>
          </p>
        </nav>
        <div className="text-white text-center">Desarrollado por <a href="https://nextdigital.com.mx">NextDigital.com.mx</a></div>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

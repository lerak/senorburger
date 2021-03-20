import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import './whatsapp.css'
function whatsapp(){
  return(
    <a
        href="https://wa.me/00529841776607"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
    
        <FontAwesomeIcon className="whatsapp-icon" icon={faWhatsapp} size="3x" />
      </a>

  )
}

export default whatsapp
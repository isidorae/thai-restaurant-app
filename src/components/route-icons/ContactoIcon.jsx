import React from 'react'
import contactoImg from '/src/assets/img/contacto.png'
import './routeicons.css'

export default function ContactoIcon() {

    return (
        <div className='container-icon'>
                <img src={contactoImg} alt="" />
                <p className="fw-bold text-white">Contacto</p>
        </div>
    )
}
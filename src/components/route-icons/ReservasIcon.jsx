import React from 'react'
import reservasImg from '/src/assets/img/reservas.png'
import './routeicons.css'

export default function ReservasIcon() {

    return (
        <div className='container-icon'>
                <img src={reservasImg} alt="" />
                <p className="fw-bold text-white">Reservas</p>
        </div>
    )
}
import React from 'react'
import deliveryImg from '/src/assets/img/delivery.png'
import './routeicons.css'

export default function DeliveryIcon() {

    return (
        <div className='container-icon'>
                <img src={deliveryImg} alt="" />
                <p className="fw-bold text-white">Delivery</p>
        </div>
    )
}
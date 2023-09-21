import React from 'react'
import './heroimg.css'
import HomeIcons from './HomeIcons'

//ICONOS
import cartaImg from '/src/assets/img/menu.png'
import contactoImg from '/src/assets/img/contacto.png'
import deliveryImg from '/src/assets/img/delivery.png'
import reservasImg from '/src/assets/img/reservas.png'

export default function HeroImg() {

    return(
        <>
        <div className="jumbotron-container">
                <div className="jumbotron">
                    <div className="opacity-layer">
                        <section className="icons-homepage-section">
                            <article className="hp-icon-container">
                            <HomeIcons icono={cartaImg} text="Menú" path='/thai-restaurant-app/menu'/>
                            </article>
                            <article className="hp-icon-container">
                            <HomeIcons icono={reservasImg} text="Reservas" path='/thai-restaurant-app/reservas'/>
                            </article>
                            <article className="hp-icon-container">
                            <HomeIcons icono={deliveryImg} text="Delivery" path='/thai-restaurant-app/delivery'/>
                            </article>
                            <article className="hp-icon-container">
                            <HomeIcons icono={contactoImg} text="Contacto" path='/thai-restaurant-app/contacto'/>
                            </article>
                        </section>
                    </div>
                </div>
        </div>
        </>
    )
}
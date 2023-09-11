import React from 'react';
import './restaurantinfo.css'
import formimage from '/src/assets/img/formimage.png'
import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";
import FormContacto from './FormContacto';
import MapLoad from './MapLoad';
import { Link } from 'react-router-dom';

export default function RestaurantInfo() {




    return(
        <div className="contact-page-container">
            <div className="bg-image-contact">
                <div className="contact-page-opacity-layer">
                    <section className="info-container">
                        <br />
                        <div className="horario-atencion">
                        <h2>Contacto</h2>
                        <p> Nuestro horario de atención es de<br></br>Lunes a Domingo de<br></br>12.30 a 22.30</p>
                        <p>contacto@thainamco.cl</p>
                        </div>
                    </section>
                    <section className="icon-form-container">
                                <img src={formimage} alt="" />
                    </section>
                    <section className="social-media-icons">
                    {/* <Link className="link-home-icons fw-bold text-white text-decoration-none" to={path}>{text}</Link> */}
                        <Link path='/thai-restaurant-app/contacto'><i className="text-white fs-1"><BsInstagram/></i></Link>
                        <Link path='/thai-restaurant-app/contacto'><i className="text-white fs-1"><BsFacebook/></i></Link>
                        <Link path='/thai-restaurant-app/contacto'><i className="text-white fs-1"><BsWhatsapp/></i></Link>
                    </section>
                    <div className="mapa-form-container">
                        <section className="mapa-container">
                                <div className="mapa-ubicacion">
                                    {/* <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.8710672579205!2d-70.59875199999999!3d-33.4005278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf49efb518c3%3A0x7fc46267b5c0ea60!2sAlonso%20de%20C%C3%B3rdova%203053%2C%20Vitacura%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1693434996763!5m2!1ses!2scl"
                                    style={{ border:0 }}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    >
                                    </iframe> */}
                                    < MapLoad/>
                                </div>
                        </section>
                        <section className="form-container">
                                < FormContacto/>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )


}
import React, {useState, useEffect} from 'react';
import './restaurantinfo.css'
import formimage from '/src/assets/img/formimage.png'
import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";
import Spinner from 'react-bootstrap/Spinner';
import FormContacto from './FormContacto';
import ShowMap from './ShowMap';
import { Link } from 'react-router-dom';

import { db } from '../../firebase'
import { collection, addDoc } from 'firebase/firestore'

export default function RestaurantInfo() {

    const [mapLoaded, setMapLoaded] = useState(false);

    //****collection reference
    const formContactCollectionRef = collection(db, 'thainam-contact-form')

    //****load map 
    useEffect(() => {

        const iframe = document.querySelector('iframe')

        const handleLoad = () => {
            setMapLoaded(true);
        };

        iframe.addEventListener('load', handleLoad);

    }, [mapLoaded]);

    //****submit data
    const handleSubmit = (e, formObj) => {

        e.preventDefault()
        addContactFormToFirestore(formObj)
        alert(`Gracias '${formObj.name}', tu formulario ha sido enviado`)
    
    }
    //****add data to firestore
    const addContactFormToFirestore = async (contactFormData) => {

           await addDoc(formContactCollectionRef, contactFormData)
           
    }

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
                        <Link path='/contacto'><i className="social-icons text-white fs-1"><BsInstagram/></i></Link>
                        <Link path='/contacto'><i className="social-icons text-white fs-1"><BsFacebook/></i></Link>
                        <Link path='/contacto'><i className="social-icons text-white fs-1"><BsWhatsapp/></i></Link>
                    </section>
                    <div className="mapa-form-container">
                        <section className="mapa-container">
                                <div className="mapa-ubicacion">
                                  {!mapLoaded ? (
                                        <Spinner animation="border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                        </Spinner>
                                    ) : null}
                                    < ShowMap/>
                                </div>
                        </section>
                        <section className="form-container">
                                < FormContacto
                                handleSubmit={handleSubmit}
                                />
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )


}
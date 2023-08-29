import React from 'react'
import './routeicons.css'
import { Link } from 'react-router-dom';

export default function HomeIcons({icono, text, path}) {

    return (
        <div className='container-icon'>
                <img src={icono} alt="" />
                <p><Link className="fw-bold text-white text-decoration-none" to={path}>{text}</Link></p>
        </div>
    )
}
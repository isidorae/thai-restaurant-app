import React from 'react'
import './routeicons.css'
import { Link } from 'react-router-dom';

export default function HomeIcons({icono, text, path}) {

    return (
        <div className='container-icon'>
                <Link className="link-home-icons fw-bold text-white text-decoration-none" to={path}><img src={icono} alt="" /></Link>
                <p><Link className="link-home-icons fw-bold text-white text-decoration-none" to={path}>{text}</Link></p>
        </div>
    )
}
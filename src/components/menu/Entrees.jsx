import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './dishes.css'

import arrollado from '/src/assets/img/kungspring.webp'
import camaronesentree from '/src/assets/img/kungtod.webp'
import manipollo from '/src/assets/img/satechicken.png'
import camotefries from '/src/assets/img/sweetku.jpg'


export default function Entrees() {

const [entrees] = useState([
    {
        id: "1a",
        name: "Sate Chicken",
        img: manipollo,
        description: "Brochetas de pollo, cubiertas con salsa de maní, leche de coco y un toque de maní molido.",
        price: 9000

    },
    {
        id: "2a",
        name: "Kung Shrimp",
        img: camaronesentree,
        description: "Camarones apanados en panko tailandes , acompañados con salsa sweet & spicy.",
        price: 9200
    },
    {
        id: "3a",
        name: "Kung Spring",
        img: arrollado,
        description: "Arrollado primavera relleno con verduras, pollo y camarones acompañado con salsa sweet & spicy.",
        price: 7200
    },
    {
        id: "4a",
        name: "Sweet Caow",
        img: camotefries,
        description: "Bollos de camote frito sobre aliños propios de la cocina tailandesa. ",
        price: 7500
    }

])



    return (
        <>
    <Container className="dishes-container d-flex align-items-center justify-content-center flex-wrap">
      {  entrees.map((entree) => {

        return(

            <Row className="individual-dish-card align-items-center justify-content-between" key={entree.id}>
            <Col xs={8} md={8} className="carta-dish-info">
                <Row className="dish-info-container">
                <h4 className="fs-5">{entree.name}</h4>
                <p>{entree.description} <b>${entree.price}</b></p>
                {/* <p><b>${dish.price}</b></p> */}
                </Row>
            </Col>
            <Col xs={4} md={4} className="carta-dish-img">
            <img className="align-self-center" src={entree.img} alt={entree.name} />
            </Col>
        </Row>

        )

        })}
         
    </Container>
        </>


    )

}
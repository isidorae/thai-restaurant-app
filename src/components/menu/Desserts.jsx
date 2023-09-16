import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './menuinfo.css'

import caramelbuad from '/src/assets/img/caramelbuad.webp'
import thaicream from '/src/assets/img/thaicream.webp'
import sakoo from '/src/assets/img/sakoo.webp'

export default function Desserts() {

    const [desserts] = useState([
        {
            id: "1b",
            name: "Caramel Buad",
            img: caramelbuad,
            description: "Postre thadicional thai de camote caramelizado con leche de coco y helado de coco opcional",
            price: 4900,
        },
        {
            id: "2b",
            name: "Thai Ice Cream",
            img: thaicream,
            description: "Postre tradicional Thai de camote estilo Thai caramelizado con azúcar y cubierto de helado y mani tostado.",
            price: 4900,
        },
        {
            id: 4,
            name: "Sakoo",
            img: sakoo,
            description: "Postre thadicional thai de perlas de tapioca caramelizadas en leche de coco con rambutan o longan y helado de coco opcional",
            price: 4900,
        }
     
        ]);

        return (
            <>
        <Container className="dishes-container d-flex align-items-center justify-content-center flex-wrap">
          {  desserts.map((dessert) => {
    
            return(
    
                <Row className="individual-dish-card align-items-center justify-content-between" key={dessert.id}>
                <Col xs={8} md={8} className="carta-dish-info">
                    <Row className="dish-info-container">
                    <h4 className="fs-5">{dessert.name}</h4>
                    <p>{dessert.description} <b>${dessert.price}</b></p>
                    </Row>
                </Col>
                <Col xs={4} md={4} className="carta-dish-img">
                <img className="align-self-center" src={dessert.img} alt={dessert.name} />
                </Col>
            </Row>
    
            )
    
            })}
             
        </Container>
            </>
    
    
        )


}
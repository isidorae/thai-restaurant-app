import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './dishes.css'

import kheawaan from '/src/assets/img/kheaw-waan.webp'
import khangdang from '/src/assets/img/khangdang.webp'
import padthaikhang from'/src/assets/img/padthaikhang.webp'
import padseaew from '/src/assets/img/padseaew.webp'

export default function MainDishes() {

    const [mainDishes] = useState([
        {
            id: 1,
            name: "Kheaw Waan",
            img: kheawaan,
            description: "Pollo, camaron, vacuno y/o camaron), salteados en salsa de curry verde&coco, zapallo italiano y albahaca acompañados con arroz.",
            price: 8600,
        },
        {
            id: 2,
            name: "Khan Dang",
            img: khangdang,
            description: "Pollo, camaron, vacuno y/o camaron), salteados en salsa de curry rojo con leche de coco bambu y albahaca acompañado con arroz.",
            price: 8900,
        },
        {
            id: 3,
            name: "Pad Thai Khang",
            img: padthaikhang,
            description: "Fetucinni de arroz salteados en salsa curry&coco, pollo, camaron, vacuno y/o camaron, huevo y cebollín, sobre cama de diente de dragón",
            price: 8900,
        },
        {   
            id: 4,
            name: "Pad Sea Ew",
            img: padseaew,
            description: "Fetucinni de arroz salteados en salsa curry&coco, pollo, camaron, vacuno y/o camaron, huevo y cebollín, sobre cama de diente de dragón",
            price: 8900,
        },
     
        ]);


    return (
        <>
    <Container className="dishes-container d-flex align-items-center justify-content-center flex-wrap">
      {  mainDishes.map((dish) => {


        return(

            <Row className="individual-dish-card align-items-center justify-content-between" key={dish.id}>
            <Col xs={8} md={8} className="carta-dish-info">
                <Row className="dish-info-container">
                <h4 className="fs-5">{dish.name}</h4>
                <p>{dish.description} <b>${dish.price}</b></p>
                </Row>
            </Col>
            <Col xs={4} md={4} className="carta-dish-img">
            <img className="align-self-center" src={dish.img} alt={dish.name} />
            </Col>
        </Row>

        )

        })}
         
    </Container>
        </>


    )


}
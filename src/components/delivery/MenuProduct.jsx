import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './menuproduct.css'

import '/thai-restaurant-app/src/assets/img/kheaw-waan.webp'
import '/thai-restaurant-app/src/assets/img/khangdang.webp'
import '/thai-restaurant-app/src/assets/img/padthaikhang.webp'
import '/thai-restaurant-app/src/assets/img/padseaew.webp'

export default function MenuProduct({dataMenu, addToCart}) {


    return (
        <>
    <Container className="carta-product-container">
        {dataMenu.map((product) => {
         
            return(
            <Row className="individual-product-card" key={product.id}>
            <Col xs={8} md={8} className="carta-product-info">
                <Row className="titulo-y-descrip-container">
                <h4 className="fs-5">{product.name}</h4>
                <p>{product.description}</p>
                </Row>
                <Row className="precio-button-container">
                    <p><b>$ {product.price}</b></p>
                    <button onClick={() => addToCart(product)} className="btn btn-success">Agregar</button>
                </Row>
            </Col>
            <Col xs={4} md={4} className="carta-product-img align-items-center align-self-center">
            <img className="align-self-center" src={product.img} alt={product.name} />
            </Col>
        </Row>
        )

        })}
    </Container>
        </>


    )

}
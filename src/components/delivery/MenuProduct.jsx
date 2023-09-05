import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './menuproduct.css'

export default function MenuProduct({title, description, price, img}) {


    return (
        <>
    <Container className="carta-product-container">
        <Row>
            <Col xs={8} md={8} className="carta-product-info">
                <Row className="titulo-y-descrip-container">
                <h4 className="fs-5">{title}</h4>
                <p>{description}</p>
                </Row>
                <Row className="precio-button-container">
                    <p><b>{price}</b></p>
                    <button class="btn btn-success">Agregar</button>
                </Row>
            </Col>
            <Col xs={4} md={4} className="carta-product-img align-items-center align-self-center">
            <img className="align-self-center" src={img} alt="" />
            </Col>
        </Row>
    </Container>
        </>


    )

}
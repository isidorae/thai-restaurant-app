import React from "react";
import './tablecarrito.css'
import padseaew from '/src/assets/img/padseaew.webp'


export default function TableCarrito() {


return(
            <section className="container content-section">
            <h2 className="section-header">CARRITO</h2>
            <div className="cart-row">
                <span className="cart-item cart-header cart-column">ITEM</span>
                <span class="cart-price cart-header cart-column">VALOR</span>
                <span class="cart-quantity cart-header cart-column">CANTIDAD</span>
            </div>
            <div className="cart-items">
                {/* ITEM A COMPRAR */}
                <div className="cart-row">
                    <div className="cart-item cart-column">
                        <img className="cart-item-image" src={padseaew}  alt="" width="100" height="100" />
                        <span className="cart-item-title"> Pad Sea Ew</span>
                    </div>
                    <span className="cart-price cart-column">$8900</span>
                    <div className="cart-quantity cart-column">
                        <input type="number" value="1" className="cart-quantity-input" />
                        <button className="btn btn-dange" type="button">Eliminar</button>
                    </div>
                </div>

            </div>
            <div className="cart-total">
                <strong className="cart-total-title">Total</strong>
                <span className="cart-total-price">$0</span>
            </div>
            <button className="btn btn-primary btn-purchase" type="button">COMPRAR</button>
        </section>

)


}
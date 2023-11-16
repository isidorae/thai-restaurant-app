import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import './tablecarrito.css'

export default function TableCarrito() {

    const { removeFromCart, addOneQuantity, reduceOneQuantity, cart, total, confirmOrder} = useContext(CartContext)

        return(
            
            <div className="table-carrito-container">
                    <section className="container content-section">
                    <h2 className="section-header pt-4">CARRITO</h2>
                    <div className="cart-row">
                        <span className="cart-item cart-header cart-column">ITEM</span>
                        <span className="cart-price cart-header cart-column">VALOR</span>
                        <span className="cart-quantity cart-header cart-column">CANTIDAD</span>
                    </div>
                    <div className="cart-items">
                        {/* ITEM A COMPRAR */}
                        {!cart.cart
                        ? "sin items en carrito"
                        :  cart.cart.map(product => {

                            return (
                            <div className="cart-row" key={product.id} >
                                <div className="cart-item cart-column">
                                    <img className="cart-item-image" src={product.img}  alt="" width="100" height="100" />
                                    <span className="cart-item-title"> {product.name}</span>
                                </div>
                                <span className="cart-price cart-column">$ {product.price}</span>
                                <div className="cart-quantity cart-column">
                                      <button onClick={() => addOneQuantity(product)}className="btn-plus-cart">+</button>
                                    <span className="cart-quantity-span">{product.quantity || 1 }</span>
                                    <button onClick={() => reduceOneQuantity(product)} className="btn-minus-cart">-</button>
                                    <button onClick={() => removeFromCart(product.id)} className="btn btn-danger fw-bold" type="button">Eliminar</button>
                                </div>
                            </div>

                            )

                        })
                    }
                    
                    </div>
                    <div className="cart-total">
                        <strong className="cart-total-title">Total</strong>
                        <span className="cart-total-price">${total}</span>
                        <button onClick={() => confirmOrder(total)} className="btn btn-primary btn-purchase fw-bold" type="button">COMPRAR</button>
                    </div>
                </section>
            </div>

        )
}
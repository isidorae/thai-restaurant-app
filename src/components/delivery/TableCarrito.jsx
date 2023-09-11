import React, { useState, useEffect} from "react";
import './tablecarrito.css'

export default function TableCarrito({cart, removeFromCart, addToCart}) {


    const [total, setTotal] = useState(0)
    const [quantities, setQuantities] = useState({})

    // const [cartPrice, setCartPrice] = useState(0)

    useEffect(() => {

        updateCartTotal()
        console.log("****Total****")
        console.log(total)
        console.log("****Quantities****")
        console.log(quantities)


    }, [quantities, addToCart])


    //***************** CHANGE QUANTITY for specific product */

    const handleQuantityChange = (productId, newQuantity) => {
        setQuantities((prevQuantities) => (
            {
            ...prevQuantities,
            [productId]: newQuantity,
        }
        ));
    }

    //***************** UpdateCartTotal */

    const updateCartTotal = () => {
        let newTotal = 0;
        cart.forEach((product) => {
            
            const quantity = quantities[product.id] || 1;
            const price = product.price;
            console.log(product)
            console.log(quantity)
            console.log(price)
            newTotal = newTotal + (price*quantity) 

        })
        setTotal(newTotal)
    }


    const confirmOrder = () => {
       return confirm(`El total de tu orden es "$ ${total}" , seras reedirigo para rellenar tus datos y realizar el pago`)
    }


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
                {cart.map(product => {

                    return (
                    <div className="cart-row" key={product.id} >
                        <div className="cart-item cart-column">
                            <img className="cart-item-image" src={product.img}  alt="" width="100" height="100" />
                            <span className="cart-item-title"> {product.name}</span>
                        </div>
                        <span className="cart-price cart-column">$ {product.price}</span>
                        <div className="cart-quantity cart-column">
                            <input 
                            onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                            type="number"
                            value={quantities[product.id] || 1 }
                            className="cart-quantity-input"
                            />
                            <button onClick={() => removeFromCart(product.id)} className="btn btn-danger" type="button">Eliminar</button>
                        </div>
                    </div>

                    )

                })}
            
            </div>
            <div className="cart-total">
                <strong className="cart-total-title">Total</strong>
                <span className="cart-total-price">${total}</span>
                <button onClick={confirmOrder} className="btn btn-primary btn-purchase" type="button">COMPRAR</button>
            </div>
        </section>
     </div>

)


}
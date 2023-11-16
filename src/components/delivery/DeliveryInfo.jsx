import { useContext, useEffect } from 'react';
import './deliveryinfo.css'
import MenuProduct from './MenuProduct';
import TableCarrito from './TableCarrito';
import products from './deliveryProducts'
import CartContext from '../../context/CartContext';

export default function DeliveryInfo() {

    const { addToCart, cart } = useContext(CartContext)

    useEffect(() => {
        console.log(cart)
    }, [cart])

    return(
        <div className="delivery-page-container">
            <div className="bg-image-delivery">
                <div className="delivery-page-opacity-layer">
                    <section className="info-delivery">
                        <br />
                <h1>Delivery</h1>
                <br />
                    </section>
                    <section className="food-items-container">
                        <article className="food-item">
                        < MenuProduct 
                        dataMenu={products}
                        addToCart={addToCart}
                        />
                        </article>
                    </section>
                    <br />
                    <br />
                </div>
            </div>
        </div>
    )


}
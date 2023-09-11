import React, { useState } from 'react';
import './deliveryinfo.css'
import MenuProduct from './MenuProduct';
import TableCarrito from './TableCarrito';


export default function DeliveryInfo() {


    const [products] = useState([
        {
            id: 1,
            name: "Kheaw Waan",
            img: '/src/assets/img/kheaw-waan.webp',
            description: "Trozos de tu proteína favorita (vegetales & tofu, pollo, pollo & camaron, vacuno o camaron), salteados en salsa de curry verde con leche de coco, zapallo italiano y albahaca acompañados con arroz.",
            price: 8600,
        },
        {
            id: 2,
            name: "Khan Dang",
            img: '/src/assets/img/khangdang.webp',
            description: "Trozos de tu proteína favorita (vegetales & tofu, pollo, pollo & camaron, vacuno o camaron), salteados en salsa de curry rojo con leche de coco bambu y albahaca acompañado con arroz.",
            price: 8900,
        },
        {
            id: 3,
            name: "Pad Thai Khang",
            img: '/src/assets/img/padthaikhang.webp',
            description: "Fetucinni de arroz salteados en salsa curry con leche de coco, tu proteína favorita (vegetales & tofu, pollo, pollo & camarón, vacuno o camarón), huevo y cebollín, sobre cama de diente de dragón",
            price: 8900,
        },
        {   
            id: 4,
            name: "Pad Sea Ew",
            img: '/src/assets/img/padseaew.webp',
            description: "Fetucinni de arroz salteados en salsa curry con leche de coco, tu proteína favorita (vegetales & tofu, pollo, pollo & camarón, vacuno o camarón), huevo y cebollín, sobre cama de diente de dragón",
            price: 8900,
        },
     
        ]);

        //********************** agregar al carrito
        const [cart , setCart] = useState([]);

        const addToCart = (product) => {

            const isProductInCart = cart.some((item) => item.name === product.name)

                if(isProductInCart) {
                    alert('Producto ya esta en el carrito de compras')
                     return
                }

                setCart([...cart, product]);
                console.log(cart)

            } 

        console.log(cart)

        //********************** eliminar del carrito
        const removeFromCart = (id) => {

            //eliminar de html... pero hay que eliminar de array 
        //    e.target.parentNode.parentNode.remove()
        //  e.preventDefault()
    
           let newCart = cart.filter( el => {
            console.log(id)
                return el.id !== id
           })
           setCart(newCart)
           console.log(newCart)
    
        }


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
                        < MenuProduct dataMenu={products} addToCart={addToCart}/>
                        </article>
                    </section>
                    <br />
                    <br />
                    <TableCarrito
                    cart={cart}
                    removeFromCart={removeFromCart}
                    addToCart={addToCart}
                    />
                </div>
            </div>
        </div>
    )


}
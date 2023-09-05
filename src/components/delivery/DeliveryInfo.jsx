import React from 'react';
import './deliveryinfo.css'
import MenuProduct from './MenuProduct';
import TableCarrito from './TableCarrito';
import kheaw from '/src/assets/img/kheaw-waan.webp'
import khandang from '/src/assets/img/khangdang.webp'
import padthaikhang from '/src/assets/img/padthaikhang.webp'
import padseaew from '/src/assets/img/padseaew.webp'


export default function DeliveryInfo() {

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
                        title="Kheaw Waan"
                        img={kheaw}
                        description="Trozos de tu proteína favorita (vegetales & tofu, pollo, pollo & camaron, vacuno o camaron), salteados en salsa de curry verde con leche de coco, zapallo italiano y albahaca acompañados con arroz."
                        price="$8600"/>
                        </article>
                        <article className="food-item">
                        < MenuProduct
                        title="Khan Dang"
                        img={khandang}
                        description="Trozos de tu proteína favorita (vegetales & tofu, pollo, pollo & camaron, vacuno o camaron), salteados en salsa de curry rojo con leche de coco bambu y albahaca acompañado con arroz."
                        price="$8900"/>
                        </article>
                        <article className="food-item">
                        < MenuProduct
                        title="Pad Thai Khang"
                        img={padthaikhang}
                        description="Fetucinni de arroz salteados en salsa curry con leche de coco, tu proteína favorita (vegetales & tofu, pollo, pollo & camarón, vacuno o camarón), huevo y cebollín, sobre cama de diente de dragón"
                        price="$8900"/>
                        </article>
                        <article className="food-item">
                        < MenuProduct
                        title="Pad Sea Ew"
                        img={padseaew}
                        description="Fetucinni de arroz salteados en salsa curry con leche de coco, tu proteína favorita (vegetales & tofu, pollo, pollo & camarón, vacuno o camarón), huevo y cebollín, sobre cama de diente de dragón"
                        price="$8900"/>
                        </article>
                    </section>
                    <br />
                    <br />
                    <TableCarrito/>
                </div>
            </div>
        </div>
    )


}
import React, {useState, useEffect} from "react";
import './reservasinfo.css'
import ReserveDate from './ReserveDate';
import { db } from '../../firebase'
import { collection, addDoc } from 'firebase/firestore'

export default function ReservasInfo() {



   //******crear obj con valores de reserva */
   const [reserves, setReserve] = useState([])
   const [successAlert, setSuccessAlert] = useState(false)

   const reservasCollectionRef = collection(db, 'reservas')


       //************ on 'Confirmar Datos' ***********/
       const addReserve = (reservesData) => {

        setReserve(reservesData)

        const confirmData = window.confirm(`¿Confirmas tu reserva para el día "${reservesData.date}" a las 
        "${reservesData.time}", a nombre de "${reservesData.name}", mesa para 
            "${reservesData.people}" personas, y datos de contacto"${reservesData.email}" 
          y "${reservesData.cel}" ?`)

          if(confirmData) return addToFirestore(reservesData)
          setReserve([])
        

    }
         //************ Add to server ***********/
    const addToFirestore = async (reservesData) => {

        setSuccessAlert(true)

           await addDoc(reservasCollectionRef, reservesData)
           
    }

    function clearShowAlert() {
    setTimeout(() => {
        setSuccessAlert(false);
    }, 4000);
}

useEffect(() => {

    if(successAlert) {
        setTimeout(() => {
            setSuccessAlert(true);
        }, 500);

        clearShowAlert()

    }

}, [successAlert])

    return(
        <div className="reservas-page-container">
            <div className="bg-image-reservas">
                <div className="reservas-page-opacity-layer">
                    <section className="info-reservas">
                        <div className='datepicker-container'>
                            <ReserveDate
                            addReserve={addReserve}
                            reserves={reserves}
                            />
                            {successAlert && (
                                 <div className="success-alert col-sm-8 align-self-center" role="alert">
                                 Reserva realizada con exito! 
                                 </div>
                            )}
                        </div>
                    </section>
                    
                </div>
            </div>
        </div>
    )


}
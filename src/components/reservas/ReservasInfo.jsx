import React, {useState} from "react";
import './reservasinfo.css'
import ReserveDate from './ReserveDate';
import { db } from '../../firebase'
import { collection, addDoc } from 'firebase/firestore'
import AlertMsg from "./AlertMsg";

export default function ReservasInfo() {


   //******crear obj con valores de reserva */
   const [reserves, setReserve] = useState([])
   const [successAlert, setSuccessAlert] = useState(false)
   const [missingData, setMissingData] = useState(false)
   const [missingHour, setMissingHour] = useState(false)
   const [missingDate, setMissingDate] = useState(false)

   const reservasCollectionRef = collection(db, 'reservas')

   //******* Generic function to validate data inputs */

   function handleInvalidState(setState, value) {
        setState(value)

        setTimeout(() => {
            setState(!value)
        }, 4000);

   }

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

        handleInvalidState(setSuccessAlert, true)

           await addDoc(reservasCollectionRef, reservesData)
           
    }



    return(
        <div className="reservas-page-container">
            <div className="bg-image-reservas">
                <div className="reservas-page-opacity-layer">
                    <section className="info-reservas">
                        <div className='datepicker-container'>
                            <AlertMsg stateVar={missingData} msg="Debes rellenar todos los campos" className="missing-data-alert col-sm-9" />
                            <AlertMsg stateVar={missingHour} msg="Debes seleccionar una hora de reserva" className="missing-data-alert col-sm-12" />
                            <AlertMsg stateVar={missingDate} msg="Debes seleccionar una fecha" className="missing-data-alert col-sm-12" />
                            <ReserveDate
                            addReserve={addReserve}
                            reserves={reserves}
                            handleInvalidState={handleInvalidState}
                            setMissingData={setMissingData}
                            setMissingHour={setMissingHour}
                            setMissingDate={setMissingDate}
                            />
                            <AlertMsg stateVar={successAlert} msg="Reserva realizada con exito!" className="success-alert col-sm-82" />
                        </div>
                    </section>
                    
                </div>
            </div>
        </div>
    )


}
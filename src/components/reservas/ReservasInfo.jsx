import React, {useState} from "react";
import './reservasinfo.css'
import ReserveDate from './ReserveDate';
import { db } from '../../firebase'
import { collection, addDoc } from 'firebase/firestore'
import AlertMsg from "./AlertMsg";

export default function ReservasInfo() {

   const [reserves, setReserve] = useState([])
   const [successAlert, setSuccessAlert] = useState(false)
   const [missingData, setMissingData] = useState(false)
   const [missingHour, setMissingHour] = useState(false)
   const [missingDate, setMissingDate] = useState(false)
   const [wrongEmail, setWrongEmail] = useState(false)

   const reservasCollectionRef = collection(db, 'reservas')

        //******* display missing data msg
        function handleDisplayMsg(setState) {
                setState(true)

                setTimeout(() => {
                    setState(!true)
                }, 4000);
        }
       //************ on 'Confirmar Datos' ***********/
       const addReserve = (reservesData) => {

        setReserve(reservesData)

        const confirmData = window.confirm(`¿Confirmas tu reserva para el día "${reservesData.date}" a las 
        "${reservesData.time}", a nombre de "${reservesData.name}", mesa para 
            "${reservesData.people}" personas, y datos de contacto"${reservesData.email}" 
          y "${reservesData.cel}" ?`)

          if(confirmData) {
            addToFirestore(reservesData)
        }
        setReserve([])
        }

         //************ Add to server ***********/
         const addToFirestore = async (reservesData) => {

        handleDisplayMsg(setSuccessAlert)
        await addDoc(reservasCollectionRef, reservesData)
           console.log('data sent to firestore', reservesData)
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
                            <AlertMsg stateVar={wrongEmail} msg="Debes ingresar un email válido" className="missing-data-alert col-sm-12" />
                            <ReserveDate
                            addReserve={addReserve}
                            reserves={reserves}
                            handleDisplayMsg={handleDisplayMsg}
                            setMissingData={setMissingData}
                            setMissingHour={setMissingHour}
                            setMissingDate={setMissingDate}
                            setWrongEmail={setWrongEmail}
                            />
                            <AlertMsg stateVar={successAlert} msg="Reserva realizada con exito!" className="success-alert col-sm-82" />
                        </div>
                    </section>
                    
                </div>
            </div>
        </div>
        )
}
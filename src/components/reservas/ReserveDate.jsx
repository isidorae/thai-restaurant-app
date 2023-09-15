import React, { useState, useEffect } from "react";
import ReactDatePicker from "react-datepicker";
import { addMonths } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import "./reservedate.css";
import HourReserved from "./HourReserved";
import PropTypes from 'prop-types'

export default function ReserveDate({ addReserve, reserves, handleInvalidState, setMissingData, setMissingHour, setMissingDate }) {

  //******date picker value */
  const [date, setDate] = useState("");

  //******Input values */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cel, setCel] = useState("");
  const [people, setPeople] = useState(1);

  //******boton elegir hora */
  const [time, setTime] = useState("");

  //******update Input values */
  const updateInputValue = (e, setSomething) => {
    return setSomething(e.target.value);
  };

  //******pasar fecha a string sin hora */
  let DATE_TO_STRING = JSON.stringify(date).slice(1, 11);

  useEffect(() => {
    console.log(name);
    console.log(email);
    console.log(cel);
    console.log(people);
    console.log(date);
    console.log(time);
  }, [time]);

      //************ Receive 'time' value from Child ***********/
          const getTimeValue = (value) => {

            setTime(value)

          }


          function validateDataEntered() {

            if(name === "" || email === "" || cel === "") {
              // invalidForm(true)
              handleInvalidState(setMissingData, true)
              return false
            }

            if(time === "") {
              // invalidTime(true)
              handleInvalidState(setMissingHour, true)
              return false
            }

            if(date === "") {
              handleInvalidState(setMissingDate, true)
              return false
            }
            return true
    
          }
    

       //************ Submit data ***********/
        const validarData = (e) => {

          if (validateDataEntered() == true) {

                    e.preventDefault();


                    const reservesData = {
                    name,
                    email,
                    cel,
                    date: DATE_TO_STRING,
                    time,
                    people,
                    };

                    // validateData(reservesData);
                    addReserve(reservesData);

                  if(reserves.length < 1) {
                    console.log(reserves)
                    setName("")
                    setEmail("")
                    setCel("")
                    setPeople(1)
                    setEmail("")
                   return setPeople(1)
                  }

                }
        };

  


  return (
    <>
      <h1 className="pt-4">Reservas</h1>
      <p>Ingresa tus datos</p>
      <section className="reserve-date-components">
          <input
            value={name}
            onChange={(e) => updateInputValue(e, setName)}
            className="name-input" type="text" placeholder="Nombre" required
          />
          <input
            value={email}
            onChange={(e) => updateInputValue(e, setEmail)}
            className="name-input" type="email" placeholder="tu correo" required
             />
          <input
            value={cel}
            onChange={(e) => updateInputValue(e, setCel)}
            className="name-input" type="text" placeholder="celular (+569 9999 4444)" required
          />
          <p>Mesa para cuantas personas:</p>
          <input
            value={people}
            onChange={(e) => updateInputValue(e, setPeople)}
            className="name-input" type="number" required
          />
          <p>Selecciona una fecha</p>
          <ReactDatePicker
            className="name-input"
            showIcon
            selected={date}
            onChange={(date) => setDate(date)}
            isClearable
            placeholderText="Selecciona Fecha"
            minDate={new Date()}
            maxDate={addMonths(new Date(), 3)}
            shouldCloseOnSelect={false}
          />
          <p>Selecciona un horario</p>
          <section className="hours-grid-container">
            <HourReserved
                getTimeValue={getTimeValue}
            />
          </section>
          <br />
          <button
            onClick={validarData}
            type="submit" className="confirm-button"
          >
            Confirmar Datos
          </button>
      </section>
    </>
  );
}


ReserveDate.propTypes = {
  addReserve: PropTypes.func.isRequired
}

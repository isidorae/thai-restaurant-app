import './reservedate.css'

export default function HourReserved({getTimeValue}) {

        //******Seleccionar hora */
        const reserveTime = (e) => {
            e.preventDefault();
            let value = e.target.innerText
            console.log(value)
            getTimeValue(value);
          };

        return (
        <div className="hours-grid">
            <div> <button onClick={reserveTime} className="hour-button">12.30</button></div>
            <div> <button onClick={reserveTime} className="hour-button">13.00</button></div>
            <div> <button onClick={reserveTime} className="hour-button">13.30</button></div>
            <div> <button onClick={reserveTime} className="hour-button">14.00</button></div>
            <div> <button onClick={reserveTime} className="hour-button">14.30</button></div>
            <div> <button onClick={reserveTime} className="hour-button">15.00</button></div>
            <div> <button onClick={reserveTime} className="hour-button">19.00</button></div>
            <div> <button onClick={reserveTime} className="hour-button">19.30</button></div>
            <div> <button onClick={reserveTime} className="hour-button">20.00</button></div>
            <div> <button onClick={reserveTime} className="hour-button">20.30</button></div>
            <div> <button onClick={reserveTime} className="hour-button">21.00</button></div>
            <div><button  onClick={reserveTime} className="hour-button">21.30</button></div>
        </div>
        )
}
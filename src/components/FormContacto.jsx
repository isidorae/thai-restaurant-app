import React from 'react'
import './formcontacto.css'


export default function FormContacto() {
    return(
        <>
         <h3>Dudas, sugerencias y feedback</h3>
            <form htmlFor="">
            <input id="input-name" type="text" name="nombre" placeholder="Nombre" />
            <input id="input-email" type="email" name="email" placeholder="Escribe tu correo" />
            <input id="input-asunto" type="text" name="asunto" placeholder="Asunto" />
             <textarea id="input-textarea" name="comment" cols="25" rows="7"></textarea>
             <input className="btn btn-success" type="submit" value="Enviar" />
            </form>
        </>
    )
}
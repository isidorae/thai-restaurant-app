import React, { useState } from 'react'
import './formcontacto.css'


export default function FormContacto({handleSubmit}) {


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [asunto, setAsunto] = useState("")
    const [comment, setComment] = useState("")


    const gatherFormPersonData = (e) => {
        e.preventDefault()

        const formPersonData = {
            name: name,
            email: email,
            asunto: asunto,
            comment: comment
        }

        console.log(formPersonData)

        handleSubmit(e, formPersonData)

        setName("")
        setEmail("")
        setAsunto("")
        setComment("")


    }


    const updateInputValue = (e, setSomething) => {
       return setSomething(e.target.value)
    };

    return(
        <>
         <h3>Dudas, sugerencias y feedback</h3>
            <form onSubmit={handleSubmit} >
                <input value={name} onChange={e => updateInputValue(e, setName) } id="input-name" type="text" name="fullName" placeholder="Nombre" required />
                <input value={email} onChange={e => updateInputValue(e, setEmail) } id="input-email" type="email" name="email" placeholder="Escribe tu correo"  required/>
                <input value={asunto} onChange={e => updateInputValue(e, setAsunto) } id="input-asunto" type="text" name="asunto" placeholder="Asunto" required />
                <textarea value={comment} onChange={e => updateInputValue(e, setComment) }  id="input-comment" name="comment" cols="25" rows="7" required></textarea>
                <input onClick={gatherFormPersonData} className="btn btn-success fw-bold" type="submit" value="Enviar" />
            </form>
        </>
    )
}
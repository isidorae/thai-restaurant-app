import React, {useState} from 'react';
import './menubuttons.css'

export default function SelectMenuBtn({
    showSelectedMenuType,
    hideUnselectedMenuType,
    setMainDishes,
    setEntrees,
    setDesserts
}) {

    const [entreesActive, setEntreesActive] = useState(false)
    const [mainActive, setMainActive] = useState(true)
    const [dessertsActive, setDessertsActive] = useState(false)

let entrees = "Aperitivos/Entrees"
let mainDishes = "Fondos/Main dishes"
let desserts = "Postres/Desserts"


    function changeMenuType(e) {

        e.preventDefault()
        if(e.target.innerText == mainDishes) {
            setMainActive(true)
            setEntreesActive(false)
            setDessertsActive(false)
            showSelectedMenuType(setMainDishes)
            return hideUnselectedMenuType(setDesserts, setEntrees)
        }

        if(e.target.innerText == entrees) {
            setMainActive(false)
            setEntreesActive(true)
            setDessertsActive(false)
            showSelectedMenuType(setEntrees)
            return hideUnselectedMenuType(setMainDishes, setDesserts)
        }

        if(e.target.innerText == desserts) {
            setMainActive(false)
            setEntreesActive(false)
            setDessertsActive(true)
            showSelectedMenuType(setDesserts)
            return hideUnselectedMenuType(setMainDishes, setEntrees)
        }

        showActiveMenu(e.target.innerText)
    }



    return(
        <>
        <button onClick={changeMenuType} className={`select-menu-btn ${entreesActive ? 'active-menu-btn': ""}`}>{entrees}</button>
        <button onClick={changeMenuType} className={`select-menu-btn ${mainActive ? 'active-menu-btn': ""}`}>{mainDishes}</button>
        <button onClick={changeMenuType} className={`select-menu-btn ${dessertsActive ? 'active-menu-btn': ""}`}>{desserts}</button>
        </>
    )

}
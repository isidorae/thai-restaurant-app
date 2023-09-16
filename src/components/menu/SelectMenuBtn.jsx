import './menubuttons.css'

export default function SelectMenuBtn({
    showSelectedMenuType,
    hideUnselectedMenuType,
    setMainDishes,
    setEntrees,
    setDesserts
}) {

let entrees = "Aperitivos/Entrees"
let mainDishes = "Fondos/Main dishes"
let desserts = "Postres/Desserts"


    function changeMenuType(e) {

        e.preventDefault()
        if(e.target.innerText == mainDishes) {
            showSelectedMenuType(setMainDishes)
            return hideUnselectedMenuType(setDesserts, setEntrees)
        }

        if(e.target.innerText == entrees) {
            showSelectedMenuType(setEntrees)
            return hideUnselectedMenuType(setMainDishes, setDesserts)
        }

        if(e.target.innerText == desserts) {
            showSelectedMenuType(setDesserts)
            return hideUnselectedMenuType(setMainDishes, setEntrees)
        }

    }



    return(
        <>
        <button onClick={changeMenuType} className="select-menu-btn">{entrees}</button>
        <button onClick={changeMenuType} className="select-menu-btn">{mainDishes}</button>
        <button onClick={changeMenuType} className="select-menu-btn">{desserts}</button>
        </>
    )

}
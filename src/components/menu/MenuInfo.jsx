import React, {useState} from 'react';
import './menuinfo.css'
import MainDishes from './MainDishes';
import Entrees from './Entrees';
import SelectMenuBtn from './SelectMenuBtn';
import Desserts from './Desserts';

export default function MenuInfo() {

    const [showMainDishes, setMainDishes] = useState(true);
    const [showEntrees, setEntrees] = useState(false);
    const [showDesserts, setDesserts] = useState(false)


    const showSelectedMenuType = (setType) => {

        setType(true)
        
    }

    const hideUnselectedMenuType = (setType, setTypeTwo) => {
        setType(false)
        setTypeTwo(false)
    }

    return(
        <div className="menu-page-container">
            <div className="bg-image-menu">
                <div className="menu-page-opacity-layer">
                    <section className="info-menu">
                        <div className="menu-info-title">
                         <h1>Menu</h1>
                        </div>
                        <div className="select-menu-type">
                            <SelectMenuBtn
                            showSelectedMenuType={showSelectedMenuType}
                            hideUnselectedMenuType={hideUnselectedMenuType}
                            setMainDishes={setMainDishes}
                            setDesserts={setDesserts}
                            setEntrees={setEntrees}
                            />
                        </div>
                        <div className="menu-grid-container">
                            {showMainDishes && <MainDishes/>}
                            {showEntrees && <Entrees/>}
                            {showDesserts && <Desserts/>}
    
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )


}
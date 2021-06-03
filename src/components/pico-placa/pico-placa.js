import React from "react"
import "./pico-placa.scss"
import imgPicoPlaca from "../../images/picoyplaca.png" 

const PicoPlaca = () =>{
    return <div className="pico">
        <h2 className="pico__title">Pico y Placa esta semana:</h2>
        <div className="pico__logo-container">
            <img className="pico__logo" src={imgPicoPlaca}/>
        </div>
    </div>
}

export default PicoPlaca
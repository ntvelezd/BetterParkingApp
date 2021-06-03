import React from "react"
import "./index-header.scss"
import imgEafitLogo from "../../images/Eafit-white.png" 


const IndexHeader = () =>{
    return <header className="index-header">
      <h2 className="index-header__title">Better Parking </h2>
      <div className="index-header__logo-container">
        <img className="index-header__logo" src={imgEafitLogo}/>
      </div>
    </header>
}

export default IndexHeader 
import React from "react"
import ButtonGroup from "../components/button-group/button-group"
import IndexHeader from "../components/index-header/index-header"
import PicoPlaca from "../components/pico-placa/pico-placa"
import "normalize.css"

const pageStyles = {
  color: "#232129",
  paddingBottom: "600px",
  fontFamily: "Lato,sans-serif",
     
}

// markup
const IndexPage = () => {
  return (   
   < main style={pageStyles}>
    <IndexHeader/>
    <ButtonGroup/>
    <PicoPlaca/>
   </main>
  )
}


export default IndexPage

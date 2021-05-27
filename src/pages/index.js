import React from "react"
import ButtonGroup from "../components/button-group/button-group"

const pageStyles = {
  color: "#232129",
  paddingTop: "20px",
  paddingBottom: "600px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
   
}

const headingStyles = {
  marginTop: 0,
  marginBottom: 0,
  width:"100%",
  align: "center",
  }

// markup
const IndexPage = () => {
  return (   
   < main style={pageStyles}>
      <h1 style={headingStyles}>Better Parking</h1>
   <ButtonGroup/>
   </main>
  )
}


export default IndexPage

import React from "react"
import ParkingList from "../components/parking-list/parking-list"
import { Button } from '@material-ui/core';
import {Link} from "gatsby"
import "normalize.css"


const Parking = () =>{
    
    return (<div className="parking-page">
        <div className="parking-header">
            <Link to="/"><Button color= "secondary" variant= "contained" >Volver a Inicio</Button></Link>
        </div>
        <ParkingList></ParkingList>
    </div>)
}



export default Parking;
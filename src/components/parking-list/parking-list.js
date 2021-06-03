import { Button } from "@material-ui/core"
import React, { useState } from "react"
import { Link } from "gatsby"
import "./parking-list.scss"


const ParkingList = () =>{
    const [items,setItems]= useState(null)
    const fetchData = async() =>{
        try{
            const response= await fetch("http://localhost:3000/parking");
            const data= await response.json();
            const items= data.Parkings.map((elem,key)=>{
                return <div key={key} className="parking-elem"> 
                    <p className="parking-elem__name">{elem.Nombre_usuario}</p>
                    <p className="parking-elem__location">{elem.Parqueadero}</p>
                    <p className="parking-elem__plate">{elem.Placa}</p>               
                    <p className="parking-elem__time">{elem.Hora_inicial} - {elem.Hora_final}</p>
                    <div className="parking-elem__button">
                    <Link to="/details" state={{id: elem.Id}}><Button color="primary" variant= "contained" fullWidth size="large"> Pay </Button></Link>
                    </div>                    
                </div>
            })
            setItems(items);
        }
        catch{
            setItems(<div className="parking-elem"> 
                <p className="parking-elem__name">No se encuentra ningún registro</p>
                <p className="parking-elem__location"></p>
                <p className="parking-elem__plate"></p>               
                <p className="parking-elem__time"></p>
            </div>)
        }
        
    }
    
    fetchData()
    
    return (<div className="parking-list">
        {items}
    </div>)
}

export default ParkingList;
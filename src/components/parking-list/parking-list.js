import React, { useState } from "react"
import "./parking-list.scss"

const ParkingList = () =>{
    const [items,setItems]= useState(null)
    const fetchData = async() =>{
        const response= await fetch("http://localhost:3000/parking");
        const data= await response.json();
        const items= data.Parkings.map((elem,key)=>{
            return <div key={key} className="parking-elem"> 
                <p className="parking-elem__name">{elem.Nombre_usuario}</p>
                <p className="parking-elem__location">{elem.Parqueadero}</p>
                <p className="parking-elem__plate">{elem.Placa}</p>               
                <p className="parking-elem__time">{elem.Hora_inicial} - {elem.Hora_final}</p>
            </div>
        })
        setItems(items);
    }
    
    fetchData()
    
    return (<div className="parking-list">
        {items}
    </div>)
}

export default ParkingList;
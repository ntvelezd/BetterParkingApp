import React, { useState } from "react"
import "normalize.css"
import { Link } from "gatsby"
import { Button } from "@material-ui/core"


const DetailsPage = ({location}) => {
    const [item,setItem]= useState(null)
    const fetchData = async() =>{
        try{
            const response= await fetch("http://localhost:3000/parking/"+location.state.id);
            const data= await response.json();
            const item= data.map((elem,key)=>{
                let hora1 = parseInt(elem.Hora_inicial.substring(7,9))
                let hora2 = parseInt(elem.Hora_final.substring(0,2))
                let horadiff= hora2-hora1
                let valor_hora= 2100
                let numberFormat= new Intl.NumberFormat("co-CO",{style:"currency",currency:"COP",useGrouping:true})
                return <div key={key} className="parking-elem"> 
                    <p className="parking-elem__name">{elem.Nombre_usuario}</p>
                    <p className="parking-elem__location">{elem.Parqueadero}</p>
                    <p className="parking-elem__plate">{elem.Placa}</p>               
                    <p className="parking-elem__time">{elem.Hora_inicial} - {elem.Hora_final}</p>
                    <p className="parking-elem__cost">Valor a Pagar: {numberFormat.format(horadiff*valor_hora)}</p>
                    <div className="parking-elem__button">
                    </div>                    
                </div>
            })
            setItem(item);
        }
        catch{
            setItem(<div className="parking-elem"> 
                <p className="parking-elem__name">Desconocido</p>
                <p className="parking-elem__location"></p>
                <p className="parking-elem__plate"></p>               
                <p className="parking-elem__time"></p>
            </div>)
        }
    }

    fetchData()

    return (
    <div>
        <Link to="/parking"><Button color="secondary" variant="contained" >Volver a Parking</Button></Link>
    {item}
    
    </div>
    )
}  
  
export default DetailsPage
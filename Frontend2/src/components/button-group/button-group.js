import React from "react"
import { Button } from '@material-ui/core';
import "./button-group.scss"
import {Link} from "gatsby"

const ButtonGroup = () =>{
    return (
    <div className="buttonGrid">
        <Link to="/form"><Button color="secondary" variant= "contained"> Visitor </Button></Link>
        <Link to="/form"><Button color="secondary" variant= "contained"> Carpool </Button></Link>
        <Link to="/form"><Button color="secondary" variant= "contained"> Eafit User </Button></Link>
   </div>
    )

}
export default ButtonGroup
import React from "react"
import { Button } from '@material-ui/core';
import "./button-group.scss"
import {Link} from "gatsby"

const ButtonGroup = () =>{
    return (
    <div className="buttonGrid">
        <Link to="/form"><Button color="primary" variant= "contained" fullWidth size="large"> Visitor </Button></Link>
        <Link to="/new_entry"><Button color="primary" variant= "contained" fullWidth size="large"> Carpool </Button></Link>
        <Link to="/new_entry"><Button color="primary" variant= "contained" fullWidth size="large"> Eafit User </Button></Link>
        <Link to="/parking"><Button color="primary" variant= "contained" fullWidth size="large"> Parking </Button></Link>
   </div>
    )

}
export default ButtonGroup
import React from "react"
import { Button, TextField, InputLabel, Select, MenuItem,FormControl } from '@material-ui/core';
import "./register-form.scss"
import {Link} from "gatsby"



const RegisterForm = () =>{
    function submitForm(e){
        e.preventDefault();  
        console.log("Usuario Registrado");    
    }
     
    return(
    <div className="form-container"> 
       <Link to="/"><Button color= "secondary" variant= "contained">Volver a Inicio</Button></Link> 
      <form onSubmit={ submitForm }>
          <TextField id="outlined-basic" label="Name" variant="outlined" />
          <TextField id="outlined-basic" label="Last Name" variant="outlined" />
          <TextField id="outlined-basic" label="ID" variant="outlined" />
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <FormControl variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">Parking</InputLabel>
                 <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    label="Parking"
                >
                    
                    <MenuItem value={1}>Plástico</MenuItem>
                    <MenuItem value={2}>Ingenierías</MenuItem>
                    <MenuItem value={3}>Guayabos</MenuItem>
                 </Select>
                 <Button color="secondary" variant= "contained" type="submit">Registrarse</Button>
      </FormControl>

    </form>  
         
    </div>
)}

export default RegisterForm 

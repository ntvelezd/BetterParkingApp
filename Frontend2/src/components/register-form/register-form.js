import React from "react"
import { Button, TextField, InputLabel, Select, MenuItem,FormControl } from '@material-ui/core';
import "./register-form.scss"
import {Link} from "gatsby"
import Axios from "axios"





const RegisterForm = () =>{
    function submitForm(e){
        e.preventDefault();
        Axios.post("http://localhost:3000/users",{ "User_ID": "29", "Name": "Juanse", "LastName": "Diaz","Email": "juanse@gamil.com"}, {
            headers: {
            'Content-Type': 'application/json'
            }
          })
        .then(response=> {console.log(response)})
        .catch(e=>{console.log(e)});   
    }
     
    return(
    <div className="form-container"> 
       <Link to="/"><Button color= "secondary" variant= "contained">Volver a Inicio</Button></Link> 
      <form onSubmit={ submitForm}>
          <TextField id="outlined-basic" label="Name" variant="outlined" name="Name" />
          <TextField id="outlined-basic" label="Last Name" variant="outlined" name="LastName" />
          <TextField id="outlined-basic" label="ID" variant="outlined" name="User_ID"/>
          <TextField id="outlined-basic" label="Email" variant="outlined" name="Email"/>
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

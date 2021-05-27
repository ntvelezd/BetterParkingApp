import React, { useRef } from "react"
import { Button, TextField, InputLabel, Select, MenuItem,FormControl } from '@material-ui/core';
import "./register-form.scss"
import {Link} from "gatsby"

const RegisterForm = () =>{


  const name = useRef(null);
  const lastname= useRef(null);
  const email= useRef(null);
  const id= useRef(null);


    function submitForm(e){
        e.preventDefault();
        
        fetch("http://localhost:3000/users",{
            method:"POST",
            mode: "cors",
            body: JSON.stringify({"User_ID": id.current.value, "Name": name.current.value, "LastName": lastname.current.value,"Email": email.current.value}),
            headers:{
            'Content-Type': 'application/json',
            'Accept': "*/*",
            }
          }).then(res => console.log("Mensaje correcto: ", res))
          .catch(error => console.error(error)); 
        
     }

        
     
    return(
    <div className="form-container"> 
       <Link to="/"><Button color= "secondary" variant= "contained" >Volver a Inicio</Button></Link> 
      <form onSubmit={ submitForm}>
          <TextField id="outlined-basic" label="Name" variant="outlined" name="Name" inputRef={name} />
          <TextField id="outlined-basic" label="Last Name" variant="outlined" name="LastName" inputRef= {lastname} />
          <TextField id="outlined-basic" label="ID" variant="outlined" name="User_ID" inputRef={id}/>
          <TextField id="outlined-basic" label="Email" variant="outlined" name="Email" inputRef={email}/>
          <FormControl variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">Parking</InputLabel>
                 <Select
                    defaultValue= ""
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

import React, { useRef } from "react"
import { Button, TextField, InputLabel, Select, MenuItem, FormControl } from '@material-ui/core';
import "./entry-form.scss"
import { Link } from "gatsby"

const EntryForm = () => {
	const id = useRef(null);
	const name = useRef(null);
	const plate = useRef(null);
	const time_init = useRef(null);
	const time_final = useRef(null);
	const parking = useRef(null);
	
	function submitForm(e) {
		e.preventDefault();
		
		fetch("http://localhost:3000/parking", {
		method: "POST",
		mode: "cors",
		body: JSON.stringify({ "Id": id.current.value, "Nombre_usuario": name.current.value, "Placa": plate.current.value, "Parqueadero":parking.current.value, "Hora_inicial": time_init.current.value, "Hora_final": time_final.current.value }),
		headers: {
			'Content-Type': 'application/json',
			'Accept': "*/*",
		}
	}).then(res => console.log("Mensaje correcto: ", res))
	.catch(error => console.error(error));
	
}

return (
	<div className="form-container">
		<Link to="/"><Button color="secondary" variant="contained" >Volver a Inicio</Button></Link>
		<form onSubmit={submitForm}>
		  <TextField id="outlined-basic" label="Id" variant="outlined" name="Id" inputRef={id} />
			<TextField id="outlined-basic" label="Nombre" variant="outlined" name="Nombre_usuario" inputRef={name} />
			<TextField id="outlined-basic" label="Placa" variant="outlined" name="Placa" inputRef={plate} />
			<TextField id="outlined-basic" label="Hora ingreso" variant="outlined" name="Hora_inicial" inputRef={time_init} />
			<TextField id="outlined-basic" label="Hora salida" variant="outlined" name="Hora_final" inputRef={time_final} />
			<FormControl variant="outlined">
				<InputLabel id="demo-simple-select-outlined-label">Parking</InputLabel>
				<Select
				inputRef={parking}
				defaultValue=""
				labelId="demo-simple-select-outlined-label"
				id="demo-simple-select-outlined"
				label="Parking"
				>
				
				<MenuItem value={"Plástico"}>Plástico</MenuItem>
				<MenuItem value={"Ingenierias"}>Ingenierías</MenuItem>
				<MenuItem value={"Guayabos"}>Guayabos</MenuItem>
				<MenuItem value={"Argos"}>Argos</MenuItem>
				</Select>
				<Button color="secondary" variant="contained" type="submit">Enviar</Button>
			</FormControl>		
		</form>
	</div>
	)
}

export default EntryForm

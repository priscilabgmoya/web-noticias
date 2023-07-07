import { useState } from 'react';
import './formulario.css'; 
import Form from 'react-bootstrap/Form';
function Formulario ( {navegar}){

    const selectPais = (event) =>{
        let index = event.target.selectedIndex,
        paisSeleccionado = event.target.options[index].value; 
        navegar(paisSeleccionado); 
    }
    return(
        <>
        <div className='contenedor-select' > 
        <label htmlFor="selectPaises">Buscar por Pais: </label>
        <Form.Select aria-label="selectPaises" name='selectPaises' onChange={selectPais}>
        <option selected disabled >Opciones</option>
        <option value="argentina">Argentina</option>
        <option value="corea-del-sur">Corea del sur</option>
        <option value="bangladesh">Bangladesh</option>
        </Form.Select>
        </div>
        </>
    );
}
export default Formulario; 
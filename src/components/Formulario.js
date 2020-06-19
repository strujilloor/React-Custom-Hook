import React, { useState } from 'react';
import useForm from '../hooks/useForm';

const Formulario = () => {

    const showFieldsConsole = () => {
        console.log(inputs.nombre);
        console.log(inputs.apellido);
    }
    
    const { 
        inputs,
        handleInputChange,
        handleSubmit
    } = useForm( showFieldsConsole ); // we send it the submit function

    return (
        <form 
            className="w-50 mx-auto card p-3"
            onSubmit={ handleSubmit }
        >
            <h2 className="text-center">Custom Hook</h2>
            <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input 
                    id="nombre"
                    name="nombre"
                    type="text" 
                    className="form-control"
                    placeholder="Ingrese su nombre"
                    onChange={ handleInputChange }
                    value={ inputs.nombre || '' } // prevent uncontrolled inputs
                />
            </div>
            <div className="form-group">
                <label htmlFor="apellido">Apellido</label>
                <input 
                    id="apellido"
                    name="apellido"
                    type="text" 
                    className="form-control"
                    placeholder="Ingrese su apellido"
                    onChange={ handleInputChange }
                    value={ inputs.apellido || '' }
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default Formulario;

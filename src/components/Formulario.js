import React, { useState } from 'react';

const Formulario = () => {
    // there is no problem if inputs are a empty object
    // because input value attribute has a || condition
    const [inputs, setInputs] = useState({});

    // When input change, update inputs state
    const handleInputChange = (e) => {
        e.persist();
        const { name, value } = e.target;
        setInputs( { ...inputs, [name]:value } );
    }

    // When form submit, show state in console, and
    // clear fields 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs.nombre);
        console.log(inputs.apellido);
        setInputs({nombre: '', apellido: ''});
    }

    return (
        <form 
            className="w-50 mx-auto card p-3"
            onSubmit={ handleSubmit }
        >
            <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input 
                    id="nombre"
                    name="nombre"
                    type="text" 
                    className="form-control"
                    placeholder="Ingrese su nombre"
                    onChange={ handleInputChange }
                    value={ inputs.nombre || '' }
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

import { useState } from 'react'

/**
 * Manages the status of a form whatever it is.
 * submit: function that is executed when form submit
 * initialState: initial values for the fields (by default it is an empty object)
 */
const useForm = (submit, initialState = {}) => {

    // there is no problem if inputs are a empty object
    // because input value attribute has a || condition
    const [inputs, setInputs] = useState(initialState);

    // When input change, update inputs state
    const handleInputChange = (event) => {
        event.persist();
        const { name, value } = event.target;
        setInputs( { ...inputs, [name]:value } );
    }

    // When form submit, show state in console, and
    // clear fields 
    const handleSubmit = (event) => {
        event.preventDefault();

        submit();
        
        // clear fields
        setInputs({nombre: '', apellido: ''});
    }


    // Exports: state, and handle input change and handle submit functions
    return {
        inputs,
        handleInputChange,
        handleSubmit
    };
}

export default useForm

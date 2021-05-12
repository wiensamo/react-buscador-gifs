import React, { useState } from 'react';
import PropTypes from 'prop-types'
//Comando  rapido  para crear un funcional component con proptypes (rafcp)
const CounterApp = ( { value = 10} ) =>{

    const [ counter, setCounter, ] = useState( value );

    const handleAdd = () => {
        setCounter( counter + 1 );
        //setCounter ( (c)=> c + 1 );
        //se puede llamar tambien una funcion para ejecutar el  cambio del  state
    }
    const handleSubstract = () => {
        setCounter( counter - 1 );
    }
    const handleReset = () => setCounter (value)
    // Estosa eventos tambien se pueden realizar en una sola linea


    /**Cuando  llamamos a un evendo  podemos llamar  tambien funciones que puede o no 
     * otras variables  como condiciones
     * <button onClick={ (e)=> handlealgo(e) }>Cualquier boton</button>
     */
    return (
        <>
            <h1> CounterApp </h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }> + 1 </button>
            <button onClick={ handleReset }> Reset </button>
            <button onClick={ handleSubstract }> - 1 </button>
        </>
    )
}
CounterApp.propTypes ={
    value: PropTypes.number.isRequired
}
export default CounterApp;
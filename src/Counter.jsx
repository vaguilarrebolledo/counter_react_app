
import { useState } from 'react';
import PropTypes from 'prop-types';


export const CounterApp = ({value}) => {

    const [ counter, setCounter ] = useState(value);
    
    const handledAdd = () =>{ 
       // console.log(value) 
       setCounter(  counter + 1)
       // setCounter(  (c)=> c + 1)
    }
    const resta = () =>{ setCounter(  counter - 1)}

     const reset = () =>{ setCounter( value )}

    return (
    <>
        <h1> CounterApp </h1>
        <h2>{ counter }</h2>

        <button onClick={ handledAdd }>+1</button>
        <button onClick={ resta }>-1</button>
        <button onClick={ reset } >Reset</button>
      
    </>
  )
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
  }

//   function sumar(value){
//         const valor = valor + value;
//         return valor;
//   }
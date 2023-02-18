import { render } from "@testing-library/react";
import React from "react";
import { FirstApp } from "../FirstApp";

 

 describe('Pruebas en FirstApp', () => { 
    
    test('debe de hacer match con el snapshot', () => { 

        const title = 'Hola, soy goku'

        render( <FirstApp title={ title} /> );

     })

 });
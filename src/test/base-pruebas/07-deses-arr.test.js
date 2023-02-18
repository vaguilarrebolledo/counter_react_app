import { number } from "prop-types";
import { retornaArreglo } from "../../base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr', () => { 
    
    test('debe de retornar un string y un numero', () => { 

        const [ letters, numbers] = retornaArreglo();
        //console.log(retorno)
        expect( letters ).toBe('ABC');
        expect( numbers ).toBe(123);

        expect( typeof letters).toBe('string');
        expect( typeof numbers).toBe('number');

        expect( letters ).toEqual( expect.any(String));
     });


 });
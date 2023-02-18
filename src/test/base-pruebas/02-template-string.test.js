import { getSaludo } from "../../base-pruebas/02-template-string";

describe('Pruebas en 02-template-string', () => { 
    test('getSaludo debe retornar "Hola Fernando"', ()=> {
        //1. inicializacion
        const name = 'Fernando';
        //2. estimulo
        const message = getSaludo( name );
        //3. observar el comportamiento... esperado
        //expect( message1 ).toBe( message2 );
        expect( message ).toBe(`Hola ${ name }` );
    });

});

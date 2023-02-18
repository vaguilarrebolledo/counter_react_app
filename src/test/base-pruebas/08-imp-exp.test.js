import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";



describe('Pruebas 08-imp-exp', () => {

        test('getHeroeById debe retornar un heroe por ID', () => { 
            
            const id = 1;
            const hero = getHeroeById(id);

            expect(hero).toEqual({id:1, name:'Batman', owner:'DC'});


         })

         test('getHeroeById debe retornar undefined si no existe', () => { 
            
            const id = 100;
            const hero = getHeroeById(id);

            expect(hero).toBeFalsy();
         })
         

         //tarea
         test('getHeroesByOwner debe retornar un arreglo de DC', () => { 
            
            const owner = 'DC';
            const hero = getHeroesByOwner(owner);
            //console.log(hero);
            expect(hero.length).toBe(3);
            expect(hero).toEqual([
                { id: 1, name: 'Batman', owner: 'DC' },
                { id: 3, name: 'Superman', owner: 'DC' },
                { id: 4, name: 'Flash', owner: 'DC' }
              ]);

              expect(hero).toEqual(heroes.filter( (hero) => hero.owner === owner));

         })
         test('getHeroesByOwner debe retornar un arreglo de Marvel', () => { 
            
            const owner = 'Marvel';
            const hero = getHeroesByOwner(owner);
            //console.log(hero);
            expect(hero.length).toBe(2);
            expect(hero).toEqual(heroes.filter( (hero) => hero.owner === owner));
         })
 });
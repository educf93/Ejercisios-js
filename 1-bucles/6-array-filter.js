// ej 6
// crea un array con la gente que su nombre tiene 4 letras
// utilizando el método filter de los arrays
// y muéstralo por consola.

let personas = [{
        nombre: 'Jamiro',
        edad: 45
    },
    {
        nombre: 'Juan',
        edad: 35
    },
    {
        nombre: 'Paco',
        edad: 34
    },
    {
        nombre: 'Pepe',
        edad: 14
    },
    {
        nombre: 'Pilar',
        edad: 24
    },
    {
        nombre: 'Laura',
        edad: 24
    },
    {
        nombre: 'Jenny',
        edad: 10
    },
]


     
let mayorQue10 = personas.filter(persona => persona.nombre.length<=4);
console.log(mayorQue10);
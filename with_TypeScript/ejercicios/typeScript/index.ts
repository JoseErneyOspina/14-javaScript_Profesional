console.log('Hello TypeScript');

function add(a: number, b: number) {
    return a + b;
}

const sum = (2, 3);

//Boolean
let muted: boolean = true;
muted = false;

// Números
let age = 6;
let numerador:number = 42;
let denomindador:number = age;
let resultado = numerador / denomindador;

// string
let nombre: string = 'Richard';
let saludo = `Me llamo ${nombre}`;

// Arreglos
// Podemos hacer que los arreglos sean de un tipo
// Sean diversos
// O sean de una denotación explicita que hayamos denotado
let people: string[] = [];
people = ['Isabel', 'Nicole', 'Raul'];
//people.push("9000")
// Si quiero un arreglo de string y números
// Denoto el arreglo con = Array<string | number>
let peopleAndNumbers: Array< string | number> = [];
peopleAndNumbers.push('Ricardo');
peopleAndNumbers.push(9001);

// enum
enum Color { 
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul'
}
let colorFavorito: Color = Color.Verde;
console.log(`Mi color favorito es ${colorFavorito}`);

// Any
// Cuando no tenemos certeza de que tipo va a ser la variable
let comodin: any = 'Joker';
comodin = { type: 'Wildcard' };

// Object
let someObject: object = { type: 'Wildcard' };
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


// Funciones
function addSuma(a: number, b:number): number {
    return a + b;
};
const suma = addSuma(4,6);
// Tipar funciones que devuelve funciones
function createAdder (a: number): (number) => number {
    return function (b: number) {
        return b + a;
    }
}
const addFour = createAdder(4);
const fourPlus6 = addFour(6);
// Argumentos y parametros opcionales
/* function fullName(firstName: string, lasName?: string): string { */
function fullName(firstName: string, lasName: string = 'Smith'): string {
    return `${firstName} ${lasName}`;
}
const richard = fullName('Agente');

// Interfaces
enum Color {
    Dorado = 'Rojo',
    Plateado = 'Verde'
}
interface Rectangulo {
    ancho: number
    alto: number
    color?: Color
}
let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    color: Color.Dorado
};
function area(r: Rectangulo) {
    return r.alto * r.ancho;
}
const areaRect = area(rect);
console.log(areaRect);
// poner opcional en la interface datos
rect.toString = function () {
    return this.color ? `un rectangulo ${this.color}` : `Un rectangulo`;
};
console.log(rect.toString());

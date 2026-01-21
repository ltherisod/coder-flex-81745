//SPREAD OPERADOR (...)
const numeros =[1,2,3]
const numerosConcat = numeros.concat([4,5,6]) //[1,2,3,4,5,6]

const numeroSpread =[...numeros,4,5,6] //[1,2,3,4,5,6]


///Destructuring 
const colores = ['verde', 'violeta', 'gris'] //lo saco por orden

const primero = colores[0] //verde
const segundo = colores[1] //violeta

const [primerColor, segundoColor] = colores


//objeto sacar por nombre

const persona = {
nombre:'Juan',
curso:'React',
edad:25
}

console.log(persona.nombre) //juan

const {nombre, edad}= persona


//OPERADOR TERNARIO

let mensaje;

if(edad >= 18){
    mensaje = 'Sos mayor de edad 🍻'
}else{
    mensaje = 'Sos menor de edad 📖'
}

const mensajeSugar = edad >= 18 ? 'Sos mayor de edad 🍻' : 'Sos menor de edad 📖'


//functions

function sumar (a,b){
    return a+b
}
console.log(sumar(2,5))//7

const sumarArrow = (a,b)=> {
return a+b
}



const sumarArrowPar = (a,b)=> (
 a+b
)



const superSumarArrow = (a,b)=> a+b

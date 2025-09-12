//Primer Hola mundo con javascript

console.log("Hola Mundo");
console.log("TIID212");

console.error("mi error customizado")
console.error("El programa falló exitosamente")

//Tipos de datos 

//String
"Hola mundo" 
'Hola'

//Numero
100000 
1 
-10000 
-1 

//Booleano
true
false 

//Array
['asd','asd','hola'];
[1,2,3,4,5];
[true,true,true];

//objeto
'Carlitos'
100
10
false

const jugador ={
    'username':"Carlitos",
    'score':100,
    'hoursPlayed':20,
    'professional':true, 

}

//impresion de arrays
console.log([4,4,4,5])

//impresion de los datos de un usuario
console.log(jugador)

// var = existe globalmente
// let = existe solo en bloque de codigo que se especifique  
var nameuser = 'jonh'
let lastname = 'carter'
console.log(lastname)


nombredelusaurio = 'jonh'
console.log(nombredelusaurio)

//constantes

const PI = 3.14159265358979323846264338327950
console.log(PI)

let numero1 = 1230
let numero2 = 11239


// uso del operador de la suma
let resultado = numero1 + numero2

let resultadoBoolean = numero1 < numero2

console.log(resultado)
console.log(resultadoBoolean)

// uso del operador de la comparacion

let contraseña = "Hola123"
let imput = "Hola12"
let verificaContraseña = contraseña == imput 

console.log(verificaContraseña)

// uso del condicional if

let puntuacionTrabajo = 12

if (puntuacionTrabajo > 30)
{

    console.log('eres muy bueno, sigue así')

} else if (puntuacionTrabajo > 15){
    
    console.log('Vas bien, pero necesitas más práctica')

} else {

    console.log('Necesitas practicar más...')

}

// uso del switch

let typecard = 'spinbyoxxocard'
switch (typecard){
    case 'debitcard':
        console.log('estos es una tarjeta de débito');
        break;
        
    case 'creditcard':
        console.log('esto es una tarjeta de crédito');
        break;
        
    case 'spinbyoxxocard':
        console.log('esto es una tarjeta de Spin by Oxxo');
        break;

        default:
        console.log('No tienes tarjeta ');
        
}

// usando ciclos : ciclo WHILE

//let i = 5
//while(i > 5){
//    console.log("Hola mundo");
//    i = i - 1
//}

// usando un ciclo infinito : ciclo WHILE

//let count = 5
//while(count==5){
//    console.log("Hola mundo")
//}

let nombres = ['Andrés', 'Camilo', 'Pedro']
console.log(nombres[0])

// uso del ciclo for para imprimir un array 

for (let i = 0; i<nombres.length; i++){
    console.log(nombres[i])
}

//Funcin sin parámetros
function saludar(){
    console.log('Hola Mundo');
}
saludar ();

//Función con parámetros (string)
function saludar(Nombre){
    console.log('hola ' + Nombre);
}
saludar ('José');

//Función con parámetros (numéricos)
function operacion(n1,n2){
    console.log(n1+n2)
}
operacion(2,2);

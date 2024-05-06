
// for (let i= 5; i<18; i++){
//     if (i==7 || i==12){
//         continue
//     }
//     alert(i)
//     console.log(i)
// }


// acceso de usuario

// let intentos = 1

// let identificar = true

// do{

//     let usuario = prompt("ingresa tu usuario, (solo tenes 3 intento)")

//     if(usuario ==null){

//         break

//     }

//     if(usuario === "emanuel cabral" && intentos <= 3){

//         alert("Bienvenido " + usuario)

//     }else{

//         alert("no se reconoce el usuario: " + usuario)

//         intentos++

        

//         if (intentos > 3){

//             alert("haz superado el numero de intentos")

//             break

//         }

//     }

// }while(identificar)


// const numeros = [1, 2, 3, 4, 5, 6, 7];
// for (let index = 0; index <= 5; index++) {
//     alert(numeros[index]);
// }

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8]

// for (let i= 0; i < numeros.length; i++) {
//     alert(numeros[i]);
//     console.log(numeros[i]);
// }


//programa ganancias

// obtengo fecha y dia
let fecha = new Date();
// alert ("hoy es: " + fecha);

let dia = fecha.getDay();
// alert("hoy es: " + dia);

let semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

let nombredia = semana[dia];
alert("Hoy es: " + nombredia)

// finalizo fecha

//--------------------------------------------------



//--------------------------------------------------
//calculo inicia
let tna = prompt("ingresa el tna");
let divtna = 100;
let anio = prompt("ingresa cantidad de dias del año");
//calculo fin

//ingreso de saldo inicia
let saldo = prompt("ingresa tu saldo");
//ingreso de saldo fin

//operacion para determinar ganancia diaria inicia
let resultado = (tna / divtna / anio) * saldo
//operacion para determinar ganancia diaria fin

//mostramos la ganancia diaria inicia
alert("tu ganancia diaria es de: $" + resultado);
//mostramos la ganancia diaria fin

//calculamos el saldo total mas las ganancias inicia
let resfinal = resultado + parseFloat(saldo)
//calculamos el saldo total mas las ganancias fin

//mostramos saldo total inicia
alert("Tu saldo actual es de: $" + resfinal);
//mostramos saldo total fin

//------------------------------------------------
//------------------------------------------------
alert("hoy es: " + nombredia);

if (nombredia == "Sábado" || "Domingo"){
    alert("es fin de semana");
}else{
    alert("es dia de semana");
}

//------------------------------------------------


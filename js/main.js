// -------------------------------------------------------------------------------------------------------------------VARIABLES
var display = document.getElementById("display"),
    operandoA=0,
    operandoB=0,
    operacion,
    intervalo,
    cifra="",
    acumulado=0,
    p_operacion=true,
    suma=false,
    restar=false;
// ------------------------------------------------------------------------------------------------------------------FUNCTION PRIMARY
function numeros_display(num) {
    // display.value = display.value + num;
    // return display.value;

    display.value =cifra+num;
    cifra=display.value;
}


// function pantalla(num) { //5//3
//     document.getElementById("display2").value = almacenamiento + cifra; //"" + 5 (5)//(5 + 3)
//     almacenamiento = almacenamiento + cifra; // save 5//save 5 + 3

// }
// -----------------------------------------------------------------------------------------------------------------FUNCTION SECONDS
// document.getElementById("sumar").addEventListener("click", pantallasuma(),
//     false); //cuando click boton + sucede la funcion pantallasuma


// function pantallasuma() { //+
//     almacenamiento = almacenamiento; //save 5 + //save 5 + 3 +
//     document.getElementById("display2").value = almacenamiento; //(5 + )//(5 + 3 +)
//     // almacenamiento=cifra; // 


// }
// -----------------------------------------------------------------------------------------------------------------OPERACIONES
// var contar=0;
function sumar() {
    // if(contar>=1){
    //     resultado();
    //     return false;
    // }
    // intervalo = display.value;
    // operandoA += parseFloat(intervalo);
    // operacion = "+";
    // limpiar();
    // contar++;
    if(restar){
        acumulado=acumulado-parseFloat(cifra);
        display.value=acumulado;
    }else{
        acumulado=acumulado+parseFloat(cifra);
        display.value=acumulado;
    }
    cifra="";
    sumar=true;
    restar=false;
    p_operacion=false;
}

function restar() {
    // intervalo = display.value;
    // operandoA -= parseFloat(intervalo);
    // operacion = "-";
    // limpiar();
    // if(operandoA<0){
    //     operandoA *= -1;
    // }
    
    if(p_operacion==false){
    if(sumar){
        acumulado=acumulado+parseFloat(cifra);
        display.value=acumulado;
    }else{
        acumulado=acumulado-parseFloat(cifra);
        display.value=acumulado;
    }
    }else{
        acumulado=parseFloat(cifra);
        p_operacion=false;
    }
    cifra="";
    sumar=false;
    restar=true;
}

// function dividir() {
//     intervalo = display.value;
//     operandoA /= parseFloat(intervalo);
//     operacion = "/";
//     if(operandoA==0){
//         operandoA=display.value;
//     }
//     limpiar();
// }

// function multiplicar() {
//     intervalo = display.value;
//     operandoA *= parseFloat(intervalo);
//     operacion = "*";
//     if(operandoA==0){
//         operandoA=display.value;
//     }
//     limpiar();
// }
// // -----------------------------------------------------------------------------------------------------------------------RESULT AND DELETE
// function limpiar() {
//     display.value = "";
// }

function resultado() {
    // operandoB = display.value;
    // resolver()
    if(sumar){
        display.value=acumulado+parseFloat(cifra);
    }else if(restar){
        display.value=acumulado-parseFloat(cifra);
    }
    acumulado=parseFloat(document.getElementById("display").value);
    cifra=0;
}
// function resetear(){
//     display.value = "";
//     operandoA=0;
//     operandoB=0;
//     operacion="";
// }
// function resolver() {
//     var res = 0;
//     switch (operacion) {
//         case "+":
//             res = parseFloat(operandoA) + parseFloat(operandoB);
//             break;
//         case "-":
//             res = parseFloat(operandoA) - parseFloat(operandoB);
//             break;
//         case "/":
//             res = parseFloat(operandoA) / parseFloat(operandoB);
//             break;
//         case "*":
//             res = parseFloat(operandoA) * parseFloat(operandoB);
//             break;
        
//     }
//     resetear();
//     display.value = res;
// }


display.value = 0;
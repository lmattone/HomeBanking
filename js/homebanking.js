//Declaración de variables
var nombreUsuario = "Camila Rodriguez";
var saldoCuenta = 10000;
var limiteExtraccion = 3000;
var Agua = 350; 
var Telefono = 425;
var Luz = 210;
var Internet = 570;
var Cuenta_amiga1= 1234567;
var Cuenta_amiga2= 7654321;
var códigoDeSeguridad = 2540;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
    iniciarSesion();
}

//Funciones creadas por mi
function sumarDinero(dinero) {
    saldoCuenta = dinero + saldoCuenta;
}
function restarDinero(dinero) {
    saldoCuenta = saldoCuenta - dinero;
}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var nuevoLimiteExtraccion = prompt("Ingrese el nuevo límite de extraccion: ");
    

    if  (nuevoLimiteExtraccion=="" || nuevoLimiteExtraccion==null || isNaN(nuevoLimiteExtraccion)|| nuevoLimiteExtraccion<0){
        alert ("El valor ingresado es incorrecto");

    } else{
        limiteExtraccion = parseInt(nuevoLimiteExtraccion);
        alert("Su nuevo límite de extracción es: $" + limiteExtraccion);

        actualizarLimiteEnPantalla(limiteExtraccion);
    }  
}

function extraerDinero() {
    var cantdinero = prompt("Ingrese la cantidad de dinero que desea extraer: ");
    var dinero = parseInt(cantdinero);
    var saldo = saldoCuenta;
    
    if (cantdinero=="" || cantdinero==null || isNaN(cantdinero)|| cantdinero<=0){
        alert ("El valor ingresado es incorrecto");

    } else if (dinero <= saldo && dinero <= limiteExtraccion && dinero % 100==0) {
        saldoAnterior = saldoCuenta;
        saldoActual = saldoCuenta - dinero;
        restarDinero(dinero);
        alert("Se procedió a extraer: $" + dinero + "\nSaldo anterior: $" + saldoAnterior + "\nSaldo actual: $" + saldoActual);
        actualizarSaldoEnPantalla();  
    } 

    if (dinero > saldo) {
        alert("Saldo insuficiente para extraer la suma indicada de la cuenta");
    }
    if (dinero%100!==0) {
        alert("Este cajero solo permite retirar billetes de 100");  
    } 

}

function depositarDinero() {
    var tipoDeposito = prompt("Indique si va a realizar un deposito en cheque o efectivo:");
    
    switch (tipoDeposito){
        case "cheque":
        var numeroCheque = prompt("Ingrese los dígitos del cheque: ");
        var numeroFinalCheque = parseInt(numeroCheque);

        if(numeroCheque=="" || numeroCheque==null || isNaN(numeroCheque) || numeroCheque<=0){

            alert("Error al ingresar el número de cheque, debe tener como máximo 9 dígitos");   
        }else if (numeroFinalCheque<999999999){
        var cantdinero = prompt("Ingrese el importe del cheque que desea depositar: ");
        var dinero = parseInt(cantdinero);

        if(cantdinero=="" || cantdinero==null || isNaN(cantdinero) || cantdinero<=0){
    
            alert ("El valor ingresado es incorrecto");  
        } else{
        
        saldoAnterior = saldoCuenta;
        saldoActual = dinero + saldoCuenta;
        sumarDinero(dinero);
    
        alert("Has depositado el cheque n°: "+ numeroCheque +"\nHas depositado la suma de $" + cantdinero + "\nSaldo anterior: $" + saldoAnterior + "\nSaldo actual: $" + saldoActual);
        actualizarSaldoEnPantalla();
        }
    } 
        
    break;
        case "efectivo":
                var cantdinero = prompt("Ingrese el dinero que desea depositar: ");
                var dinero = parseInt(cantdinero);
            
                if(cantdinero=="" || cantdinero==null || isNaN(cantdinero)|| cantdinero<0){
            
                    alert ("El valor ingresado es incorrecto");
                    
                }else{               
                saldoAnterior = saldoCuenta;
                saldoActual = dinero + saldoCuenta;
                sumarDinero(dinero);
            
                alert("Has depositado: $" + cantdinero + "\nSaldo anterior: $" + saldoAnterior + "\nSaldo actual: $" + saldoActual);
                actualizarSaldoEnPantalla();
            }
    break;
    default:

        alert("No existe la opción seleccionada"+"\nIndique cheque o efectivo");
}
}

function pagarServicio() {
    var saldo = saldoCuenta;
    var seleccion = prompt("Ingresa el número que corresponda con el servicio que quieras pagar: \n" + "\n 1. Agua" + "\n 2. Teléfono" + "\n 3. Luz" + "\n 4. Internet");

    if(seleccion=="" || seleccion==null || isNaN(seleccion) || seleccion<=0){

        alert("No existe la opción seleccionada");
        
    }
    switch (seleccion) {
        case "1":
            if (saldo> Agua) {
                restarDinero(Agua);
                var saldoActual = saldo-Agua;
                alert("Has pagado el servicio de Agua"+"\nSaldo anterior: $"+saldo+"\nDinero descontado: $"+Agua+"\nSaldo actual: $"+saldoActual);
                actualizarSaldoEnPantalla();

            } else {
                alert("Saldo insufiente para pagar el servicio seleccionado");
            }
            break;
        case "2":
            if (saldo> Telefono) {
                    restarDinero(Telefono);
                    var saldoActual = saldo-Telefono;
                    alert("Has pagado el servicio de Teléfono"+"\nSaldo anterior: $"+saldo+"\nDinero descontado: $"+Telefono+"\nSaldo actual: $"+saldoActual);
                    actualizarSaldoEnPantalla();
    
            } else {
                alert("Saldo insufiente para pagar el servicio seleccionado");
            }
            break;
        case "3":
            if (saldo> Luz) {
                    restarDinero(Luz);
                    var saldoActual = saldo-Luz;
                    alert("Has pagado el servicio de Luz"+"\nSaldo anterior: $"+saldo+"\nDinero descontado: $"+Luz+"\nSaldo actual: $"+saldoActual);
                    actualizarSaldoEnPantalla();
    }
            break;
        case "4":
                if (saldo> Internet) {
                    restarDinero(Internet);
                    var saldoActual = saldo-Internet;
                    alert("Has pagado el servicio de Internet"+"\nSaldo anterior: $"+saldo+"\nDinero descontado: $"+Internet+"\nSaldo actual: $"+saldoActual);
                    actualizarSaldoEnPantalla();
    
            }
            break;
        default:
            alert("No existe el servicio que ha seleccionado");
    }
}

function transferirDinero(){
    
    var montodeseado = prompt("Ingrese el monto que desea transferir:");
    var monto=parseInt(montodeseado);
    var saldo=saldoCuenta;

    if (montodeseado=="" || montodeseado==null || isNaN(montodeseado) || montodeseado<0){

        alert ("El valor ingresado es incorrecto");  
    }
    if (saldo < monto) {
        alert("No puede transferirse esa cantidad de dinero porque no hay saldo suficiente");
    } else if (saldo>monto && monto>0) {

        var cuenta = prompt("Ingrese la cuenta a la cual desea transferir el dinero: ");
        var cuenta1 = parseInt(cuenta);
        if (cuenta1== Cuenta_amiga1 || cuenta1== Cuenta_amiga2){
            restarDinero(monto);
            alert("Se ha transferido: $"+monto+"\nCuenta destino: "+cuenta1);
            actualizarSaldoEnPantalla();

        }else{
            alert("Solo puede transferir dinero a una cuenta amiga");
        }
    }
    }

function iniciarSesion(){

    var codigo = prompt("Ingrese su código de seguridad:");

    if (codigo == códigoDeSeguridad) {
        alert("Bienvenido/a " + nombreUsuario + " ya puedes comenzar a realizar operaciones");
    } else {
        alert("Código incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad");
        saldoCuenta = 0;
        actualizarSaldoEnPantalla();
    }
}



//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}

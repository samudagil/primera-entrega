let tv = prompt("ingrese modelo de televisor (LG, SAMSUNG, XIAOMI, TESLA)");

let lg = 313;

let samsung = 369;

let xiaomi = 145;

let tesla = 299;

if(tv.toLocaleLowerCase() === "lg"){
    alert("el monto de su producto es " + lg + "$")
}else if(tv.toLocaleLowerCase() === "samsung"){
    alert("el monto de su producto es " + samsung + "$")
}else if(tv.toLocaleLowerCase() === "xiaomi"){
    alert("el monto de su producto es " + xiaomi + "$")
}else if(tv.toLocaleLowerCase() === "tesla"){
    alert("el monto de su producto es " + tesla + "$")
}else{
    alert("el producto que ingreso no es correcto");
}

let montoProducto = parseInt(prompt("ingrese monto del producto"));

let cuotas = parseInt(prompt("ingrese en cuantas cuotas desea pagar"));

let i = 1;
    while(i <= cuotas){
        let divisionMontoFinal = montoProducto / cuotas;
        console.log("el monto a pagar es de " + divisionMontoFinal.toFixed(2) + "$ en " + cuotas + " meses")
        break;
    }
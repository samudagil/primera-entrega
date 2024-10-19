let tvLg = 313;

let tvSamsung = 369;

let tvXiaomi = 145;

let tvTesla = 299;

function producto (tv){
    if(tv.toLocaleLowerCase() === "lg"){
        console.log("el monto de su producto es " + tvLg + "$");
    }else if(tv.toLocaleLowerCase() === "samsung"){
        console.log("el monto de su producto es " + tvSamsung + "$");
    }else if(tv.toLocaleLowerCase() === "xiaomi"){
        console.log("el monto de su producto es " + tvXiaomi + "$");
    }else if(tv.toLocaleLowerCase() === "tesla"){
        console.log("el monto de su producto es " + tvTesla + "$");
    }else{
        console.log("el producto que ingreso no es correcto");
    }
}

producto(prompt("ingrese marca de tlevision(LG, SAMSUNG, XIAOMI, TESLA)"));

function pagoCuotas(montoProducto, cuotas){
    let i = 1;
    while(i <= cuotas){
        let divisionMontoFinal = montoProducto / cuotas;
        console.log("el monto a pagar es de " + divisionMontoFinal.toFixed(2) + "$ en " + cuotas + " meses")
        break;
    }
}

pagoCuotas(parseInt(prompt("ingrese monto del producto")),parseInt(prompt("ingrese en cuantas cuotas desea pagar")));
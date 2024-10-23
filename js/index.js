let tvLg = 313;

let tvSamsung = 369;

let tvXiaomi = 145;

let tvTesla = 299;

function producto (tv){
    if(tv.toLocaleLowerCase() === "lg"){
        console.log("el monto de su producto es " + tvLg + "$");
        function montoProducto(cuotas){
            let i = 1;
            while(i <= cuotas){
                let divisionMontoFinal = tvLg / cuotas;
                console.log("el monto a pagar es de " + divisionMontoFinal.toFixed(2) + "$ en " + cuotas + " meses")
                break;
        }
        }
        
    montoProducto(parseInt(prompt("ingrese en cuantas cuotas desea pagar")))
    }else if(tv.toLocaleLowerCase() === "samsung"){
        console.log("el monto de su producto es " + tvSamsung + "$");
        function montoProducto(cuotas){
            let i = 1;
            while(i <= cuotas){
                let divisionMontoFinal = tvSamsung / cuotas;
                console.log("el monto a pagar es de " + divisionMontoFinal.toFixed(2) + "$ en " + cuotas + " meses")
                break;
        }
        }
        
    montoProducto(parseInt(prompt("ingrese en cuantas cuotas desea pagar")))
    }else if(tv.toLocaleLowerCase() === "xiaomi"){
        console.log("el monto de su producto es " + tvXiaomi + "$");
        function montoProducto(cuotas){
            let i = 1;
            while(i <= cuotas){
                let divisionMontoFinal = tvXiaomi / cuotas;
                console.log("el monto a pagar es de " + divisionMontoFinal.toFixed(2) + "$ en " + cuotas + " meses")
                break;
        }
        }
        
    montoProducto(parseInt(prompt("ingrese en cuantas cuotas desea pagar")))
    }else if(tv.toLocaleLowerCase() === "tesla"){
        console.log("el monto de su producto es " + tvTesla + "$");
        function montoProducto(cuotas){
            let i = 1;
            while(i <= cuotas){
                let divisionMontoFinal = tvTesla / cuotas;
                console.log("el monto a pagar es de " + divisionMontoFinal.toFixed(2) + "$ en " + cuotas + " meses")
                break;
        }
        }
        
    montoProducto(parseInt(prompt("ingrese en cuantas cuotas desea pagar")))
    }else{
        console.log("el producto que ingreso no es correcto");
    }
}

producto(prompt("ingrese marca de tlevision(LG, SAMSUNG, XIAOMI, TESLA)"));
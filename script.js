// usamos busqueda lineal
const ofertas = [1500, 2000, 2500, 3000, 3500, 4000];
const salarioMinimo = 2700;

// se buscan las primeras ofertas
function buscarPrimeraOferta (ofertas, salarioMinimo){

    for (let i = 0; i < ofertas.length; i++){
        if(ofertas[i] >= salarioMinimo){ //compara oferta correcta
            return i; //retomamos el indice de la primera oferta valida
            
        }

    }
    return -1; //si no se encuentra niguna oferta que cumpla, arrojara -1
    
}

console.log("la oferta con un salario iguan o superior a: ",salarioMinimo, " es: ",buscarPrimeraOferta(ofertas, salarioMinimo));
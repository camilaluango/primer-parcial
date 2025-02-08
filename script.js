const ofertas = [1500, 2000, 2500, 3000, 3500, 4000];
const salarioMinimo = 1000;

function buscarPrimeraOferta (ofertas, salarioMinimo){

    for (let i = 0; i < ofertas.length; i++){
        if(ofertas[i] >= salarioMinimo){
            return i;
            
        }

    }
    return -1;
    
}

console.log("la oferta con un salario iguan o superior a: ",salarioMinimo, " es: ",buscarPrimeraOferta(ofertas, salarioMinimo));

function somarSubVetores(vetor){
    
    let resultado = [];
    
    for(let indice = 0; indice < vetor.lenght; indice ++){
        let subVetor = vetor[indice];
        let soma = 0;
        
        
        for(let subIndice = 0; subIndice < subVetor.lenght; subIndice ++){
            soma = soma + subVetor[subIndice];
        }
        resultado[indice]  = soma;
        
    }
    
    return resultado;
    
    
}
console.log(somarSubVetores([1,1],[1,1,1],[0,0,0,1]))
console.log("----------------------")
console.log(resultado);







function calcularVetor(vetor, numero){
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] > 5){
            vetor[i] = vetor[i] * numero;
        }
    }
    return vetor;
}

console.log(calcularVetor([1,3,5,7,9, 13], 3));

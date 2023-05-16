
function testeFinal(string, numero){
    switch(string){
        case "mundojs":
            console.log("MundoJS");
            return numero;
        case "soma":
            return (numero/2) + (numero*numero);
        case "vetor":
            let vetor = [];
            for(let i = 0; i < 5; i++){
                vetor[i] = numero + (i * 2);
            }
            return vetor;
        case "booleano":
            let UmVetor = [];
            for(let i = 0; i < 5; i++){
                UmVetor[i] = numero + (i * 2);
            }
            let soma = UmVetor.reduce((a,b)=> a + b);
            return soma > 35;
        default:
            return -1;
    }
}

let resultado = testeFinal("mundojs", 5);
console.log(resultado);




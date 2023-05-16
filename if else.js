let simbolo1 = "R$";
let simbolo2 = "$";
let simbolo3 = "E";

function moeda(simbolo){
    switch (simbolo){

        case "R$":
            console.log("Real");
            break;
    
        case "$":
            console.log("Dolar");
            break;

        case "E":
            console.log("Euro");
            break;

        default:
            console.log("Não encontrado!")
            break;   
    }
}

moeda(simbolo1);
moeda(simbolo2);
moeda(simbolo3);
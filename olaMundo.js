// Write a message to the console.
console.log('hello world!');
console.log(" ");



function olaMundo(){
    console.log("Olá Mundo!");
    console.log("Ola Mundo novamente!");
    console.log("Ola Mundo mais uma vez!");
    console.log(" ");
}

olaMundo();

let somar = function(valor1, valor2){
    let resultado = valor1 + valor2;
    console.log(resultado);
    console.log(" ");
}

somar(1,2);
somar(4,4);
somar(99,1);

let soma = function(valor1, valor2){
    let resultado = valor1 + valor2;
    return resultado;
}

soma(6,6);

let subtrair = function(valor1, valor2){
    console.log(valor1 - valor2);
    return valor1 - valor2;
}
subtrair(5,3);
subtrair(7,3);

let somatoria = function(valor1, valor2){
    return valor1 + valor2;
}
let resultado = somatoria(10,10);
console.log(resultado);
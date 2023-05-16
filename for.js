// formula for
for(let i = 0; i < 10; i++){
    console.log(i);
}
console.log(" ");
console.log(" ");

// lendo lista com for
let lista = ["cachorro", "gato", "galinha"];

for(let i = 0; i < lista.length; i++){
    console.log(lista[i]);
}
console.log(" ");
console.log(" ");

// modificando itens de um vetor
let valores = [1, 2, 3, 4, 5];

for(let i = 0; i < valores.length; i++){
    valores[i] = valores[i] * 2;
    console.log(valores[i]);
}
console.log(" ");
console.log(" ");

//exemplo de for com variavel declarada fora
let i = 5;
for(; i<10; i++){
    console.log(i);
}

// com incremento i no final
for(; i < 10; ){
    console.log(i);
    i = i + 2;
}
console.log(" ");
console.log(" ");

// for
let x = 0;

for(; ; ){
    console.log(i);

    i = i +2;
    x = i/2;

    if(x>20){
        break
    }
}
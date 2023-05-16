//criar um loop que percorre o vetor e informar se o aluno passou.
// condição para passar é nota maior que 7.

let alunos = [
    {
        nome: "Maria",
        nota: 8
    },
    {
        nome: "Pedro",
        nota: 4
    },
    {
        nome: "Joao",
        nota: 10
    },
    {
        nome: "Paulo",
        nota: 9
    },
    {
        nome: "Ana",
        nota: 7
    },
    {
        nome: "Bianca",
        nota: 6
    },
]

//tem dois jeitos de resolver essa tarefa:
// usando for:

console.log("FOR");
for(let i = 0; i < alunos.length; i++){
    if(alunos[i].nota > 7){
        console.log(`${alunos[i].nome}: passou.`);
    }
}
console.log("------------------ ");
// usando for of: 

console.log("FOR OF");
for(let aluno of alunos){
    if(aluno.nota > 7){
        console.log(`${aluno.nome}: passou`);
    }
}
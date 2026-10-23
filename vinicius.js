function somar(a, b) {
    return a + b;
}   
console.log(somar(5, 10));

console.log(somar(Number(process.argv[2]), Number(process.argv[3])));
function calcularMedia(nota1, nota2, nota3){
    return (nota1 + nota2 + nota3) / 3;
}
const n1 = Number(process.argv[2]);
const n2 = Number(process.argv[3]);
const n3 = Number(process.argv[4]); 
const mediafinal = calcularMedia(n1, n2, n3);

console.log(`A Média do aluno é: ${mediafinal.toFixed(2)}`);
if (mediafinal >= 7) {
    console.log("O aluno foi aprovado!");
    
} else {
    console.log("O aluno foi reprovado.");
    console.log("O aluno foi recuperação.");
}

function somar(a, b) {
    return a + b;
}   
function calcularMedia(nota1, nota2, nota3){
    return (nota1 + nota2 + nota3) / 3;

}

console.log(`A Média do aluno é: ${mediafinal.toFixed(2)}`);
if (mediafinal >= 7) {
    console.log("O aluno foi aprovado!");
    
} else {
    console.log("O aluno foi reprovado.");

} if (mediafinal >= 5) {
    console.log("O aluno foi recuperação.");
}
module.exports = { 
    somar, calcularMedia
}

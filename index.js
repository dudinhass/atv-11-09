
let nota1 = parseFloat (prompt("digite uma nota: "));
let nota2 = parseFloat (prompt("digite uma nota: "));
let nota3 = parseFloat (prompt("digite uma nota: "));
let nota4 = parseFloat (prompt("digite uma nota: "));

let media = (nota1 + nota2 + nota3 + nota4) /4;

if (media >=7) {
    alert("voce foi aprovado! media: " + media)

}else{
    alert("voce foi reprovado! media:" + media)
}
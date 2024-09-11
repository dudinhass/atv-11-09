let numero1 = parseFloat(prompt("digite o primeiro numero:"));
let numero2 = parseFloat(prompt("digite o segundo numero:"));
let operacao = prompt("escolha a operaçao (+, -, *, /):");

let resultado;

switch (operacao) {
    case "+":
        resultado = numero1 + numero2;
        break;
    case "-":
        resultado = numero1 - numero2;
        break;
    case "*":
        resultado = numero1 * numero2;
        break;
    case "/":
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
        } else {
            resultado = "erro: divisao por zero nao é permitida.";
        }
        break;
    default:
        resultado = "operação invalida!";
}

alert("o resultado é: " + resultado);

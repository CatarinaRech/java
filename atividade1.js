function somarNumeros() {
    let soma = 0;
    let continuar = true;

    while (continuar) {
        let numero = parseFloat(prompt("digite um numero (ou digite '0' para encerrar):"));


        if (!isNaN(numero)) {
            soma += numero;
        } else {
            alert("por favor, digite um numero válido.");
        }

        continuar = confirm("deseja adicionar mais numeros?");

    }

    alert("a soma dos numeros é: " + soma);


}
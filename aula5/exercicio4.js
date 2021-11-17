function validaMaioridade(idade) {
    const valorMaioridade = 18;
    if (idade > valorMaioridade) {
        return "Liberação autorizada";
    } else if (idade === valorMaioridade) {
        return "Validar documento de identidade";
    } else {
        return "ATENÇÃO: Liberação NÃO autorizada";
    }
}

const resultado = validaMaioridade(35);

console.log(resultado);
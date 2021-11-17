function criaPares(valoresNum) {
    for(let contador = 0; contador < valoresNum.length; contador++) {
        const meuItemAtual = valoresNum[contador];
        if (meuItemAtual % 2 === 0) {
            console.log(meuItemAtual);
        }
    }
}

//setup
const valoresNum = [2, 7, 11, 14, 23, 24, 50, 109, 200];
criaPares(valoresNum);

function verificaChute(chute) {
    const numero = +chute

    if(numeroInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>';
        return
    }

    if(numeroForaDoLimitePermitido(numero)) {
        elementoChute.innerHTML += `
        <div>Valor inválido: o número está entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou! Parabéns!</h2>
        <h3>O número secreto é ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if(numero > numeroSecreto) {
        elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
        <div>Você errou! O número secreto é menor <i class="fa-solid fa-arrow-trend-down"></i></div>
        `
    } else {
        elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
        <div>Você errou! O número secreto é maior <i class="fa-solid fa-arrow-trend-up"></i></div>
        `
    }
}

function numeroInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForaDoLimitePermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
});
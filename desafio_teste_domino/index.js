function validarPeca([a, b]) {
    return Number.isInteger(a) &&
        Number.isInteger(b) &&
        a >= 0 &&
        b >= 0 &&
        a <= 6 &&
        b <= 6;
}

function podeConectar(ultima, peca) {
    return peca[0] === ultima || peca[1] === ultima;
}

function conectar(ultima, peca) {
    if (!validarPeca(peca)) {
        throw new Error('Peça inválida');
    }

    if (peca[0] === ultima) {
        return peca[1];
    }

    if (peca[1] === ultima) {
        return peca[0];
    }

    throw new Error('Peça não encaixa');
}

function validarJogadores(jogadores) {
    return Array.isArray(jogadores) &&
        jogadores.length === 2 &&
        jogadores[0] !== jogadores[1];
}

function venceu(mao) {
    return mao.length === 0;
}

module.exports = {
    validarPeca,
    podeConectar,
    conectar,
    validarJogadores,
    venceu
};

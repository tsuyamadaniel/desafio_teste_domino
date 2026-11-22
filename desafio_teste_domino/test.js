const test = require('node:test');
const assert = require('node:assert/strict');

const {
    validarPeca,
    podeConectar,
    conectar,
    validarJogadores,
    venceu
} = require('./index');

test('Peça válida e inválida', () => {
    assert.equal(validarPeca([6, 6]), true);
    assert.equal(validarPeca([7, 2]), false);
    assert.equal(validarPeca([-1, 3]), false);
});

test('Encaixe em qualquer lado da peça', () => {
    assert.equal(podeConectar(5, [5, 2]), true);
    assert.equal(podeConectar(5, [2, 5]), true);
    assert.equal(podeConectar(5, [1, 2]), false);
});

test('Conectar retorna extremidade livre e rejeita não encaixe', () => {
    assert.equal(conectar(5, [5, 3]), 3);
    assert.equal(conectar(5, [3, 5]), 3);
    assert.throws(() => conectar(5, [1, 2]));
});

test('Partida para dois jogadores distintos', () => {
    assert.equal(validarJogadores(['A', 'B']), true);
    assert.equal(validarJogadores(['A', 'A']), false);
    assert.equal(validarJogadores(['A']), false);
});

test('Vitória quando jogador fica sem peças', () => {
    assert.equal(venceu([]), true);
    assert.equal(venceu([[2, 4]]), false);
});

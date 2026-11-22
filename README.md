# Desafio de Teste — Dominó

Casos de teste em **JavaScript** para validar regras simplificadas de uma partida de **Dominó para 2 jogadores**.

## Colaborador

- **Daniel Mitsuo Tsuyama**

## Especificação do desafio

- Casos de teste para testar uma partida de Dominó para 2 jogadores.
- Casos de teste em JavaScript para testar JavaScript.

### Regras implementadas

- Validação de peças com valores de 0 a 6.
- Verificação de encaixe em uma das extremidades da sequência.
- Conexão de peça e retorno do valor da extremidade livre.
- Validação de dois jogadores distintos.
- Verificação de vitória quando a mão do jogador fica vazia.

## Como executar

```bash
npm test
```

Requer Node.js 18 ou superior. Os testes utilizam o módulo nativo `node:test`, sem dependências externas.

## Estrutura

```text
index.js     # funções de regras e validação
test.js      # casos de teste automatizados
package.json # comando de execução
```

## Funcionamento dos casos de teste

| Grupo | O que verifica |
|---|---|
| Peças | Validação dos valores de uma peça e rejeição de valores fora do intervalo. |
| Encaixe | Verificação de compatibilidade em qualquer extremidade da peça. |
| Conexão | Retorno da extremidade livre e rejeição de peça que não encaixa. |
| Jogadores | Validação de uma partida para dois jogadores distintos. |
| Vitória | Identificação da vitória quando o jogador fica sem peças. |

**Observação:** as funções representam regras simplificadas para fins de testes, não uma partida completa de Dominó.

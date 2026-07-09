# Projeto QR Code

Kit de utilidades para e-commerce executado pelo terminal. O projeto permite gerar QR Codes e senhas a partir de um menu interativo.

## Sobre o projeto

Este projeto foi desenvolvido em Node.js como uma ferramenta de linha de comando. A aplicacao apresenta um menu inicial com duas opcoes principais:

- Gerar QR Code a partir de um link informado pelo usuario.
- Gerar senha aleatoria usando regras configuradas no arquivo `.env`.

## Passo a passo executado

1. Criei a estrutura inicial do projeto Node.js.
2. Configurei o `package.json` com suporte a ES Modules e o script `npm start`.
3. Adicionei o pacote `prompt` para capturar dados pelo terminal.
4. Adicionei o pacote `qrcode-terminal` para gerar QR Codes no terminal.
5. Adicionei o pacote `chalk` para melhorar a exibicao das mensagens.
6. Criei os schemas de prompt para o menu principal e para a criacao de QR Code.
7. Implementei o servico de QR Code.
8. Implementei o servico de geracao de senhas com base nas variaveis do `.env`.
9. Ajustei a geracao de senhas para usar `randomInt` do modulo nativo `node:crypto`.
10. Documentei a instalacao, configuracao e execucao neste README.

## Requisitos

- Node.js 20 ou superior
- npm

## Instalação

Clone o projeto e instale as dependências:

```bash
npm install
```

## Configuração

Crie um arquivo `.env` na raiz do projeto com as configurações da geração de senha:

### Variáveis de ambiente

- `PASSWORD_LENGTH`: tamanho da senha gerada.
- `UPPERCASE_LETTERS`: inclui letras maiúsculas quando definido como `true`.
- `LOWERCASE_LETTERS`: inclui letras minúsculas quando definido como `true`.
- `NUMBERS`: inclui números quando definido como `true`.
- `SPECIAL_CHARACTERS`: inclui caracteres especiais quando definido como `true`.

## Como executar

Use o comando:

```bash
npm start
```

O terminal exibirá um menu com as opções:

```text
1 - QRCODE
2 - PASSWORD
```

## Gerar QR Code

Escolha a opção `1`, informe o link desejado e selecione o tipo de QR Code:

```text
1 - Normal
2 - Terminal
```

Exemplo de uso:

```text
Escolha a ferramenta: 1
Digite o link para gerar o QRCode: https://exemplo.com
escolha entre o tipo: 2
```

## Gerar senha

Escolha a opção `2`. A senha será gerada usando as configurações definidas no arquivo `.env`.

Exemplo:

```text
Escolha a ferramenta: 2
password created
aB8#kP2@xZ91
```

## Scripts disponíveis

```bash
npm start
```

Executa a aplicação carregando as variáveis do arquivo `.env`.

## Repositorio no GitHub

- Repositorio publico: [projeto-qrcode](https://github.com/GabeCarbone2/projeto-qrcode)

## Links uteis

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [prompt](https://www.npmjs.com/package/prompt)
- [qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal)
- [chalk](https://www.npmjs.com/package/chalk)
- [Documentacao do modulo crypto](https://nodejs.org/api/crypto.html)

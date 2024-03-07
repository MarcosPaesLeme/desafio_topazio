# Desafio

Ao receber o seguinte conjunto de dados em formato JSON, enfrento a tarefa de realizar uma conversão específica nos
dados. A meta é remover todos os campos que estejam vazios ("") ou que contenham apenas o caractere "#". Abaixo,
apresento o payload de entrada e o esperado na saída para ilustrar o processo desejado.

## Payload de entrada

```json
{
  "name": "",
  "rooms": ["", "01", "#", "02"],
  "age": "#",
  "gender": "M",
  "companies": {
    "name": "#",
    "document": "0000000000"
  }
}
```

## Payload de saida

```json
{
  "rooms": ["01", "02"],
  "gender": "M",
  "companies": {
    "document": "0000000000"
  }
}
```

## Comandos do projeto

Buildar o projeto - `npm run build`

Formatar o código- `npm run format`

Desenvolvimento local - `npm run start:dev`

Lintar o código - `npm run start:dev`

Rodar os testes - `npm run test`

## Testes

Como executar os testes

## Contato do time

- [Marcos Leme](https://github.com/marcospaesleme)

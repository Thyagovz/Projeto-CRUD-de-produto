# CRUD de Produtos com TypeScript, POO e TDD

## Introdução

Este projeto aplica conceitos fundamentais de **TypeScript** e **Programação Orientada a Objetos (POO)** para a construção de um sistema de **CRUD de produtos**. A metodologia utilizada é **TDD (Test Driven Development)**, com os testes previamente definidos — não é necessário escrevê-los, mas é obrigatório passar em todos para validar a entrega.

## Etapas Implementadas

- Definição de interfaces no arquivo `interfaces.ts`:

  - Interface para produto: `id`, `name`, `price`, `createdAt`, `updatedAt`.
  - Interface para métodos CRUD: `createProduct`, `getProducts`, `getOneProduct`, `updateProduct`, `deleteProduct`.

- Implementação da classe `ProductList` que inclui:

  - `createProduct(data)` — Cria e adiciona um novo produto à lista.
  - `getProducts()` — Retorna todos os produtos.
  - `getOneProduct(id)` — Retorna o produto com o `id` correspondente.
  - `updateProduct(id, data)` — Atualiza os campos indicados e `updatedAt`.
  - `deleteProduct(id)` — Remove o produto da lista e retorna mensagem de confirmação.

- Instanciação da classe como constante exportada `productList`.

## Configuração do Projeto

Ao clonar, rode o comando `npm install` para instalar as dependências

Você poderá iniciar a aplicação rodando o comando:

```
npm run dev
```

Você poderá rodar os testes automáticos preparádos para essa aplicação rodando o comando:

```
npm run test
```

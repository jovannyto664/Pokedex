# Pokédex TypeScript Lite

## Sobre o projeto

O Pokédex TypeScript Lite é uma aplicação simples em Node.js com TypeScript que consulta dados de Pokémon na PokeAPI e organiza alguns resultados em um catálogo local durante a execução do programa.

## Objetivo

Praticar os principais conceitos do Módulo 01:

- Node.js;
- JavaScript no back-end;
- TypeScript;
- interfaces;
- funções tipadas;
- arrays;
- objetos;
- JSON;
- métodos de array;
- classes;
- async/await;
- fetch;
- tratamento de erros;
- GitHub;
- GitFlow;
- Kanban.

## Tecnologias utilizadas

- Node.js
- TypeScript
- TSX
- PokeAPI
- Git
- GitHub

## Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:
- Node.js
- npm
- Git

## Como instalar

Clone o repositório:

```bash
git clone https://github.com/jovannyto664/Pokedex.git
```

Acesse a pasta do projeto:

```bash
cd Pokedex
```

Instale as dependências:

```bash
npm install
```

## Como executar

Execute o projeto em ambiente de desenvolvimento:

```bash
npm run dev
```

## Estrutura do projeto

```text
Pokedex/
├── SRC/
│   ├── Main.ts
│   ├── controllers/
│   │   └── TerminalController.ts
│   ├── models/
│   │   ├── CustomErrors.ts
│   │   └── Pokemon.ts
│   ├── services/
│   │   ├── BoxService.ts
│   │   └── PokeApiService.ts
│   └── utils/
│       └── textFormatters.ts
├── pc_box.json
├── checklist.txt
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## Funcionalidades

- Buscar Pokémon por nome ou ID
- Tratar erro de Pokémon inexistente
- Transformar resposta da API em objeto simplificado
- Adicionar Pokémon ao catálogo local
- Impedir duplicidade no catálogo
- Listar Pokémon do catálogo
- Remover Pokémon por ID
- Exibir mensagens no terminal

## Exemplos de execução

A aplicação realiza as consultas automaticamente ao iniciar o programa, conforme o código em `SRC/Main.ts`.

### Busca válida

Saída obtida:

```text
[OK] Pokémon encontrado: pikachu
[OK] pikachu adicionado ao catálogo.
[OK] Pokémon encontrado: charmander
[OK] charmander adicionado ao catálogo.
```

### Busca inválida

Saída obtida:

```text
[ERRO] Não foi possível buscar o Pokémon.
```

### Duplicidade

Quando o mesmo Pokémon é adicionado novamente, a aplicação ignora a inclusão:

```text
[OK] Pokémon encontrado: pikachu
[AVISO] pikachu já está no catálogo.
```

### Remoção

Ao remover um Pokémon pelo ID, o sistema atualiza o catálogo:

```text
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60
#4 - charmander | Tipos: fire | Altura: 6 | Peso: 85
[OK] Pokémon removido do catálogo.
#4 - charmander | Tipos: fire | Altura: 6 | Peso: 85
```

## Conceitos aplicados

### TypeScript

O projeto usa TypeScript para tipar parâmetros, retornos e estruturas de dados. A função `buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null>` recebe uma string e retorna um objeto simplificado ou `null`, evitando valores indefinidos e deixando o código mais previsível. A classe `CatalogoPokemon` também define claramente os tipos de seus métodos e propriedades.

### Interface `PokemonResumo`

A interface `PokemonResumo` representa a versão resumida dos dados do Pokémon usados no catálogo local. Ela contém apenas as informações essenciais para a aplicação: `id`, `nome`, `tipos`, `altura` e `peso`.

```ts
export interface PokemonResumo {
  id: number;
  nome: string;
  tipos: string[];
  altura: number;
  peso: number;
}
```

Essa interface serve para padronizar a resposta da API e facilitar o armazenamento e a listagem dos Pokémon no catálogo.

### Fetch e async/await

A consulta à PokeAPI é feita com `fetch`, dentro de uma função assíncrona:

```ts
const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomeOuId}`);
```

O `await` garante que a requisição termine antes de processar a resposta. Em seguida, a aplicação transforma os dados da API em um objeto mais simples e útil para o projeto.

### Tratamento de erros

O projeto trata erros em duas camadas:

- quando a API responde com status diferente de sucesso (`!resposta.ok`)
- quando a requisição falha por exceção (`catch`)

Em ambos os casos, a aplicação exibe uma mensagem no terminal e retorna `null` para sinalizar que o Pokémon não pôde ser encontrado ou carregado.

### Métodos de array

Os métodos de array aparecem em pontos importantes do código:

- `map`: usado em `data.types.map(t => t.type.name)` para transformar os tipos recebidos da API em uma lista de strings.
- `some`: usado para verificar se um Pokémon já existe no catálogo antes de adicionar.
- `filter`: usado para remover um Pokémon pelo ID.
- `forEach`: usado para percorrer os Pokémon e exibir cada item no catálogo.

### Classe `CatalogoPokemon`

A classe `CatalogoPokemon` possui um atributo privado:

```ts
private pokemons: PokemonResumo[] = [];
```

Ela expõe três métodos principais:

- `adicionar(pokemon: PokemonResumo)`: adiciona um Pokémon ao catálogo se ele ainda não existir.
- `listar()`: exibe todos os Pokémon cadastrados no catálogo.
- `remover(id: number)`: remove um Pokémon pelo ID e informa o usuário caso o ID não seja encontrado.

## Git Projects

Link do Kanban:

https://github.com/users/jovannyto664/projects/2/views/1

Branches utilizadas

- main
- develop
- feat/pokedex
- docs/readme

Melhorias futuras

- Criar menu interativo no terminal
- Salvar catálogo em arquivo JSON
- Exibir HP, ataque e defesa
- Criar filtros por tipo de Pokémon
- Criar uma API própria com Express

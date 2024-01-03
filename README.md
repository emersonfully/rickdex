# Rick and Morty Pokedex Simulator

Este é um projeto simples que simula uma Pokedex, mas em vez de usar uma API de Pokémon, utiliza uma API que retorna dados sobre os personagens da série de TV Rick and Morty.

## Funcionalidades

- Listagem de personagens da série Rick and Morty.
- Detalhes individuais para cada personagem, incluindo nome, status, espécie, etc.

## Tecnologias Utilizadas

- HTML, CSS e JavaScript para a estrutura, estilo e interatividade.
- Fetch API para obter dados da API de Rick and Morty.

## Como Usar

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/seu-projeto.git 
```

## Configuração

Se você quiser modificar ou estender este projeto, você pode ajustar facilmente algumas configurações. Abra o arquivo script.js e localize a constante getCharacterId. Aqui, você pode substituir a URL da API, caso ela mude no futuro.

```javascript

const getCharacterId = (id) =>
    `https://rickandmortyapi.com/api/character/${id}`;
```

## Contribuição

Sinta-se à vontade para contribuir para este projeto. Se encontrar problemas ou melhorias, crie uma "issue" ou faça um "fork" e envie uma solicitação de pull.
Licença

Este projeto está licenciado sob a licença MIT.


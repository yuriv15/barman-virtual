# Projeto de Bebidas

Este é um projeto de aplicativo web para pesquisar e favoritar bebidas(drinks). O projeto é construído com Vue.js e TypeScript.

## Decisões de Projeto

Optei por utilizar o mínimo de bibliotecas possíveis, para demonstração de criação sem ajuda de bibliotecas. Por isso, utilizei apenas o Vue.js e o TypeScript.

Decidi incluir a possibilidade de doid modos de visualização: lista e grade. A lista é a padrão e é possível ver mais itens em um menos espaço de tempo. A grade é mais visual e permite ver uma imagem de cada item.

Decidi incluir a possibilidade de favoritar itens, para que o usuário possa salvar os itens que mais gostou. Os itens favoritados são salvos no localStorage do navegador, o que permite manter os itens favoritados em acessos posteriores.

Além das filtragens por categoria, adicionei a possibilidade de filtrar por nome, para que o usuário possa encontrar um item específico. Também adicionei a possibilidade de filtrar apenas por favoritos e mostrar todos.

Nas informações de cada item, além do modo de preparo, adicionei a possibilidade de ver os ingredientes e as medidas e o tipo de "copo" de cada drink.

Tentei trazer interatividade ao favoritar itens com animações que indiquem que o item foi favoritado.

A barra de pesquisa permite a filtragem ao apertar enter, além de utilizar o botão e possuí um botão para desfazer a filtragem.

Pontos para melhoria:
- Inclusão de testes unitários.
- Tratamento para quando não há ocorrências após uma filtragem de busca.
- Melhoria na visualização do modo lista no mobile.

## Configuração

Primeiro, instale as dependências:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Servidor de Desenvolvimento

Inicie o servidor de desenvolvimento em `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Produção

Construa o aplicativo para produção:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Tenha uma prévia do aplicativo em produção:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```



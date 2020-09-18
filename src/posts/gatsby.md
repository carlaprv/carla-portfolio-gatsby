---
title: "Gatsby bootcamp - 100daysofcode"
date: "2020-09-11"
---

New challenge!

## Working with Gatsby Pages

- Gatsby busca na página src/pages os arquivos js que devem ter componentes REACT para serem exportados e, assim, renderizados na página

```jsx
index.js = index.html
```

## Linking Between Pages with Gatsby

- Gatsby tem o componente `Link` que tem **otimização** no carregamento das páginas - muda instantaneamente!

```jsx
import { Link } from 'gatsby'
```

## Creating shared components

`src/components` pasta para salvar os componentes react

`import Footer from '../components/footer'` : importar o componente dentro das páginas
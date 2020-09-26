---
title: Vieses e a importância de sempre analisar o cenário completo
date: 2019-04-14T00:17:00.000Z
description: Como vieses (conscientes e inconscientes) interferem nos algoritmos
  que criamos?
language: pt
thumbnail: vieses.jpg
tags:
  - Inteligência Artificial
  - Vieses
  - ""
categories:
  - Tecnologia
  - Inteligência Artificial
draft: false
---
Como vieses (conscientes e inconscientes) interferem nos algoritmos que criamos?

![](https://cdn-images-1.medium.com/max/4000/0*I9ryqbQ92qTGQnvI.jpg)

Imagine que alguém lhe proponha um jogo: diante de uma sequência de três números, tente deduzir qual a regra que os rege e crie outras sequências para testar se a regra é válida. A sequência é “2, 4, 6”. O que você diria?

Como a grande maioria das pessoas, você diria “8, 10, 12” e afirmaria que a regra é “Três números pares”. Pena que essa é a regra errada. A regra verdadeira não requer múltiplos de 2. Basta que os números estejam em ordem crescente.

Essa pegadinha foi criada pelo psicólogo britânico Peter Wason [[1]](https://pdfs.semanticscholar.org/86db/64c600fe59acfc48fd22bc8484485d5e7337.pdf) em 1960, e põe em evidência um fenômeno chamado **“viés de confirmação”**: a tendência de, uma vez adotada uma crença, só buscar exemplos que a confirmem. No caso das sequências de números, bastaria propor uma sequência do tipo “3, 7, 8” para provar que a tese dos números pares é incorreta. Mas quase ninguém pensa nisso.

Com a disseminação das técnicas de Big Data, esse problema tende a ser cada vez mais comum, na medida em que ferramentas estatísticas permitem diferentes análises que podem ser usadas para provar as teses pretendidas e nossas próprias crenças.

Em um [artigo anterior](https://imasters.com.br/desenvolvimento/inteligencia-artificial-caixa-preta-que-prejudica-minorias), eu já havia comentado que o viés humano se faz presente no aprendizado de máquina desde a criação de um algoritmo até a interpretação dos dados gerados. Erros humanos se tornam parte da inteligência artificial provando que nossas tendências de generalização são responsáveis pela seleção de uma regra que molda a criação do modelo de aprendizado de máquina. Sendo assim, podemos não estar criando inteligência artificial e inovação, mas reforçando nossas próprias observações e automatizando o status quo.

Buscando explicar mais sobre o assunto, decidi escrever esse artigo sobre os principais tipos de vieses — prometo que, mesmo que você não trabalhe na área de ciência de dados, esse artigo será muito útil.

## #1 Viés de seleção

Quando a amostra de unidades usada para uma análise estatística é limitada de alguma maneira por processos não aleatórios, existe a possibilidade de viés de seleção.

![](https://cdn-images-1.medium.com/max/2000/1*ZF5kCwJ2P0X-T_KlGv2_GQ.png)

A seletividade da amostra pode render resultados distorcidos porque a natureza das relações entre variáveis nos casos incluídos na amostra não é necessariamente igual às relações que observaríamos em uma amostra aleatória.

### **Pesquisa de opinião**

Suponha que jornalista postou em seu twitter que iria realizar uma pesquisa eleitoral muito melhor que a de um certo jornal bem conhecido. Segundo ela, sua pesquisa contemplaria 2 milhões de pessoas — que seriam atingidas pela enquete em seu site -, ao invés de 2 mil. Porém, se ela entrevistasse somente 2 milhões de usuários no Twitter, a pesquisa pouco refletiria a população como um todo, que inclui milhões de pessoas que não utilizam a plataforma. Dessa forma, existem grandes chances de a pesquisa dela não refletir a realidade e trazer resultados enviesados e, portanto, incorretos.

## #2 Viés de autosseleção

A outra forma do viés de seleção é a autosseleção. Esse viés ocorre quando há distorção nos resultados pelo modo como os elementos da amostra foram selecionados. Por exemplo, na Justiça Criminal [[2]](https://www.ifch.unicamp.br/ojs/index.php/rhs/article/viewFile/910/681), a vítima pode decidir denunciar ou não um crime, e um réu condenado em primeira instância pode decidir, junto com seu advogado, apelar a decisão ou não.

Quase nunca temos informações sobre todas as influências nas decisões, e isso é até impossível em situações de julgamento humano, que sempre envolvem um aspecto subjetivo. A correlação entre os erros dos resultados das distintas etapas, junto com a eliminação de uma parte das observações em cada etapa, induz correlação entre as variáveis independentes e o erro da variável dependente (o resultado) da etapa principal focalizada na análise, o que resulta em estimativas enviesadas.

## #3 Viés de sobrevivência

Todos nós, como seres humanos, somos apaixonados por histórias de sobrevivência. O Viés de Sobrevivência, refere-se às **situações nas quais você procura pelos erros analisando os acertos** — o que, certamente, levará a caminhos equivocados.

O termo surgiu pela primeira vez durante a Segunda Guerra Mundial quando o matemático Abraham Wald resolveu o problema de onde colocar blindagens adicionais nos bombardeiros dos Aliados.

Inicialmente, os engenheiros partiram do pressuposto, através de um exame dos buracos de balas dos aviões que regressavam, de que aquelas áreas que mostravam maior concentração de buracos de balas — em particular, as asas e a fuselagem — precisavam de reforço extra. É claro que não funcionou.

![](https://cdn-images-1.medium.com/max/2004/1*A78v2NOlNoLnnbzOqtfP_A.png)

Para Wald, a conclusão estava errada porque aqueles aviões haviam retornado à base, *apesar de terem sido atingidos nos locais identificados*. Isto significava que aquelas partes — asas, cauda e centro da fuselagem — *resistiam aos tiros* e, portanto, não precisavam ser reforçadas. Seguindo os conselhos de Wald, os engenheiros colocaram blindagem adicional onde não havia buracos de balas e obtiveram resultados imediatos.

## #4 Variáveis ocultas

Uma variável oculta é uma variável que não está incluída como uma variável explicativa ou de resposta na análise, mas que pode afetar a interpretação das relações entre variáveis, podendo falsamente identificar uma sólida relação entre variáveis ou ocultar a verdadeira relação. Os modelos mais afetados por esse viés são os preditivos já que funcionam considerando que *“what happened in the past will happen in the future.”*

![](https://cdn-images-1.medium.com/max/2048/0*LfRyE5hPQmviEFX7.png)

Suponha que você está no mercado, terminou suas compras e se dirige ao caixa para pagar. Existem 3 filas, você escolhe a menor fila para ir mais rápido. No entanto, as outras filas vão mais rápido já que você não considerou a quantidade de mercadorias das pessoas nas filas.

## #5 Causa e efeito

A confusão entre a correlação e causalidade está na base de muitas concepções erradas. Daí que se torna imperativo falar sobre este assunto em maior profundidade. Os nossos cérebros são autênticas máquinas de reconhecimento de padrões, mas este processo está longe de ser perfeito, o que resulta na detecção de padrões que não existem de verdade.

![](https://cdn-images-1.medium.com/max/2048/0*aO39GeRyROGjeW2w.png)

A correlação, isto é, a ligação entre dois eventos, não implica necessariamente em uma relação de causalidade, ou seja, que um dos eventos tenha causado a ocorrência do outro. A correlação pode, no entanto, indicar possíveis causas ou áreas para um estudo mais aprofundado, ou seja, a correlação pode ser uma pista.

Só porque (A) acontece juntamente com (B) não significa que (A) causa (B). Determinar se existe de fato uma relação de causalidade requer investigação adicional, pois podem acontecer cinco situações:

1. (A) causa realmente (B);

1. (B) pode ser a causa de (A);

1. Um terceiro fator (C) pode ser causa tanto de (A) como de (B);

1. Pode ser uma combinação das três situações anteriores. Por exemplo, (A) causa (B) e ao mesmo tempo (B) causa também (A);

1. A correlação pode ser apenas uma coincidência, ou seja, os dois eventos não têm qualquer relação . (Se estivermos falando de um estudo científico, utilizar uma amostra grande ajuda a reduzir a probabilidade de coincidência).

![](https://cdn-images-1.medium.com/max/4160/1*r08Y6jnkhLL2c_KvrUGINQ.png)

Dica: o site **Spurious Correlations [[9](http://www.tylervigen.com/spurious-correlations)]. **O Spurious Correlations ilustra os perigos da nossa época, rica em dados. Um deles é que com um processador bom o suficiente para analisar um grande conjunto de dados, você pode descobrir um grande número de correlações. Muitas vão ser estatisticamente significativas, o que significa que é improvável que tenham ocorrido por acaso. Mas as relações causais, nas quais uma mudança em uma variável causa uma mudança na outra, são muito mais difíceis de encontrar.

## Como evitar o viés?

Modelos de IA e algoritmos são construídos por humanos. Da mesma forma, os dados que treinam esses algoritmos são montados, limpos, rotulados e anotados também por humanos.

A matemática, apesar de correta, pode ser mal utilizada, pois os algoritmos procurarão padrões em dados tendenciosos. Os resultados, previsivelmente, nem sempre estarão corretos.

Nem todas as equipes de ciência de dados possuem as habilidades internas para evitar e mitigar o viés de dados de treinamento. O nosso papel é apenas de garantir que as máquinas que construímos tomem melhores decisões que as nossas e que estejamos conscientizados dos problemas de inteligência artificial associados à ética e ao viés.

### Referências

[1][https://pdfs.semanticscholar.org/86db/64c600fe59acfc48fd22bc8484485d5e7337.pdf](https://pdfs.semanticscholar.org/86db/64c600fe59acfc48fd22bc8484485d5e7337.pdf)

[2][https://www.ifch.unicamp.br/ojs/index.php/rhs/article/viewFile/910/681](https://www.ifch.unicamp.br/ojs/index.php/rhs/article/viewFile/910/681)

[3][https://medium.com/@penguinpress/an-excerpt-from-how-not-to-be-wrong-by-jordan-ellenberg-664e708cfc3d](https://medium.com/@penguinpress/an-excerpt-from-how-not-to-be-wrong-by-jordan-ellenberg-664e708cfc3d)

[4][https://uxplanet.org/design-principles-selection-bias-bf51ff9ac69b](https://uxplanet.org/design-principles-selection-bias-bf51ff9ac69b)

[5][https://www.ifch.unicamp.br/ojs/index.php/rhs/article/viewFile/910/681](https://www.ifch.unicamp.br/ojs/index.php/rhs/article/viewFile/910/681)

[6] [https://sloanreview.mit.edu/article/for-better-decision-making-look-at-facts-not-data/](https://sloanreview.mit.edu/article/for-better-decision-making-look-at-facts-not-data/)

[7] [https://data36.com/statistical-bias-types-examples-part2/](https://data36.com/statistical-bias-types-examples-part2/)

[8] [https://medium.com/@penguinpress/an-excerpt-from-how-not-to-be-wrong-by-jordan-ellenberg-664e708cfc3d](https://medium.com/@penguinpress/an-excerpt-from-how-not-to-be-wrong-by-jordan-ellenberg-664e708cfc3d)

[9] [http://www.tylervigen.com/spurious-correlations](http://www.tylervigen.com/spurious-correlations)

[10] [https://run.unl.pt/bitstream/10362/7814/1/Falcao_2012.pdf](https://run.unl.pt/bitstream/10362/7814/1/Falcao_2012.pdf)

[11] [http://www.abin.gov.br/conteudo/uploads/2018/12/RBI-13_artigo-2_O-IMPACTO-DE-BIG-DATA-NA-ATIVIDADE-DE-INTELIG%C3%8ANCIA.pdf](http://www.abin.gov.br/conteudo/uploads/2018/12/RBI-13_artigo-2_O-IMPACTO-DE-BIG-DATA-NA-ATIVIDADE-DE-INTELIG%C3%8ANCIA.pdf)
---
title: Como realmente surge o viés na IA — e porque é tão difícil corrigi-lo
date: 2019-04-26T00:16:00.000Z
description: Nós costumamos explicar o viés da IA atribuindo a culpa a um conjunto de dados de treinamento enviesado. Mas a realidade tem mais aspectos a serem considerados.
language: pt
thumbnail: 1-jurtdjsaby48bnle4wm4cg.png
tags:
  - Inteligência Artificial
  - vieses
  - traduções
categories:
  - Tecnologia
  - Inteligência Artificial
draft: false
---
> Artigo original (publicado em 04/02/2019): [https://www.technologyreview.com/s/612876/this-is-how-ai-bias-really-happensand-why-its-so-hard-to-fix/](https://www.technologyreview.com/s/612876/this-is-how-ai-bias-really-happensand-why-its-so-hard-to-fix/)

Nos últimos meses, documentamos como a grande maioria das aplicações de Inteligência Artificial são baseadas na categoria de algoritmos conhecidos como *Deep Learning, *e como esses algoritmos reconhecem padrões nos dados. Além disso, incluímos como essas tecnologias afetam a vida das pessoas: como podem perpetuar injustiça no recrutamento, varejo e segurança e já podem estar afetando até o sistema penal.

No entanto, não basta saber que o viés existe. Se queremos corrigi-lo, precisamos entender como ele surge e quais mecanismos permitem que isso aconteça.

## Como o viés na IA acontece?

Nós costumamos explicar o viés da IA atribuindo a culpa a um conjunto de dados de treinamento enviesado. Mas a realidade tem mais aspectos a serem considerados: o viés pode surgir muito antes dos dados serem coletados e em outros estágios do processo de *Deep Learning*. Para discutirmos isso, focaremos em 3 principais estágios:

### Definição do problema

A primeira coisa que cientistas da computação fazem quando constroem um modelo de *Deep learning *é decidir qual o objetivo da construção do modelo. Uma empresa de cartão de crédito, por exemplo, pode buscar predizer se um cliente é ou não elegível a receber crédito. Credibilidade é um conceito complexo e para traduzirmos esse conceito para algo computável, a empresa deve decidir se quer maximizar sua margem de lucro ou maximizar a quantidade de empréstimos que são pagos. A partir disso, pode-se definir a credibilidade dentro do contexto do objetivo definido.

O problema é que *“essas decisões são tomadas por diversas razões do negócio além de justiça ou discriminação”*, explica Solon Barocas, um professor na Cornell University especialista em justiça dentro de Machine Learning. Se o algoritmo descobrir que dar empréstimos de risco (*subprime loan) *pode ser um caminho para maximizar o lucro, isso pode acabar criando um comportamento predatório que não era a intenção da empresa.

### ***Coleta dos dados***

O viés pode aparecer de duas formas nos dados de treinamento:

1. os dados coletados não são uma boa representação da realidade

1. os dados coletados refletem preconceitos existentes

O primeiro caso pode ocorrer, por exemplo, se um algoritmo de *Deep Learning *é treinado com mais fotos de pessoas brancas do que de pessoas negras. Nesse caso, o sistema de reconhecimento facial seria, inevitavelmente, pior em reconhecer rostos negros.

O segundo caso trata-se sobre o que aconteceu quando a Amazon descobriu que sua ferramenta de recrutamento estava penalizando candidatas mulheres com relação aos candidatos homens. Justamente porque o sistema foi treinado com históricos anteriores de contratação, que favoreciam candidatos homens ao invés de mulheres.

### ***Preparação dos dados***

Por último, é possível introduzir o viés durante a etapa de preparação dos dados que envolve selecionar quais atributos/variáveis o algoritmo deve considerar. (Não confunda essa etapa com a etapa de “Definição do problema”. Você pode usar as mesmas variáveis para treinar um modelo para diferentes objetivos ou usar diferentes variáveis para treinar um modelo para o mesmo objetivo).

Considerando a situação anterior, sobre modelar uma análise de crédito, poderíamos considerar a idade do cliente, renda e quantidade de empréstimos pagos.

No caso da ferramenta de recrutamento da Amazon, poderiam ser considerados o gênero do candidato, nível de educação e anos de experiência. Isto é o que as pessoas chamam de “arte” do* Deep Learning: *escolher quais atributos considerar ou ignorar e influenciar diretamente na acurácia de predição do seu modelo. Mas, enquanto, o impacto dos atributos sobre a acurácia é fácil de ser medido; o impacto sobre o viés do modelo não é.

## Por que é difícil consertar o viés na IA?

Dado todas as observações anteriores, alguns dos desafios para reduzir o bias podem já estar claros para você. Abaixo, destacamos os 4 principais:

### ***Unknown unknowns***

A introdução do viés nem sempre é óbvia durante a construção do modelo já que você pode não notar os impactos dos seus dados e escolhas desde o início.

Mesmo que o impacto seja notado, é difícil identificar em que momento o viés foi introduzido e descobrir como retirá-lo do modelo. No caso da Amazon, quando os engenheiros descobriram que a ferramenta estava penalizando candidatas mulheres, eles a reprogramaram para ignorar palavras com gênero explícito como “*women’s”. *Após essa alteração, descobriu-se que o sistema ainda estava considerando palavras com gênero implícito — verbos que eram altamente correlacionados a homens e não a mulheres, como “executed” e “captured” — e utilizando essa informação para tomar decisões.

### ***Processos imperfeitos***

Muitos dos processos e etapas de *Deep Learning* não são projetadas para detectar viés. Modelos de* Deep Learning* são testados de acordo com sua performance antes de serem publicados, criando o que poderia ser uma ótima oportunidade para encontrar o viés. Mas, na prática, os testes geralmente são assim: cientistas dividem aleatoriamente os dados em 2 conjuntos: 1 conjunto de treinamento e 1 conjunto de validação. Isso significa que os dados utilizados para testar a performance do modelo tem o mesmo viés que os dados utilizados para treiná-lo anteriormente. Portanto, ele irá falhar ao tentar indicar resultados enviesados.

### ***Ausência de contexto social***

De maneira semelhante, a forma como cientistas da computação são ensinados a definir problemas, muitas vezes, não é a melhor abordagem para problemas sociais.

Por exemplo, em um jornal, Andrew Selbst, um phd na *Data & Society Research Institute*, identificou o que ele chama de armadilha da portabilidade (“*portability trap”). *Na área de computação, é considerado uma boa prática projetar um sistema que pode ser utilizado para realizar diferentes tarefas em diferentes contextos. *“Mas o que isso realmente faz é ignorar todo um contexto social”*, diz Selbst.

*“Você não pode criar um sistema projetado para Utah e aplicá-lo em Kentucky porque diferentes comunidades tem diferentes visões de justiça. Ou você não pode ter um sistema utilizado para justiça criminal e aplicá-lo para recrutamento. O que pensamos sobre justiça em cada um desses contextos é totalmente diferente.”*

### ***A definição de justiça***

Apesar de tudo isso, não é muito claro como a ausência de viés pode parecer. Esse problema não está só presente na ciência da computação — essa questão tem uma longa história de debates na filosofia, nas ciências sociais e na lei. A diferença é que na computação, temos que definir o conceito de justiça em termos matemáticos, como equilibrar as taxas de falsos positivos e falsos negativos de um sistema de predição. Mas, como pesquisadores descobriram, existem diferentes definições matemáticas de justiça que são também mutuamente exclusivas.

A justiça significa que a mesma proporção de pessoas negras e brancas deveriam ter um alto grau de risco de serem maus pagadores? Ou que o mesmo nível de risco deveria ter o mesmo resultado independente da raça? É impossível garantir que as duas definições são mutuamente verdadeiras ([esse artigo](https://www.washingtonpost.com/news/monkey-cage/wp/2016/10/17/can-an-algorithm-be-racist-our-analysis-is-more-cautious-than-propublicas/?utm_term=.2276d78de3c1&noredirect=on) entre em mais profundidade sobre o assunto); logo, em algum momento você terá que escolher uma das definições como verdadeira.

Enquanto que em outras áreas essa decisão é entendida como algo que pode mudar ao longo do tempo, o campo da computação entende que isso deveria ser algo a ser consertado.

“Ao consertar uma resposta, você está resolvendo um problema que parece muito diferente de como a sociedade pensa sobre ele”, diz Selbst.

### Para onde vamos a partir daqui…

Imagino que assim como eu, você já deve estar sentindo-se perdido em meio a tantas informações sobre os problemas do viés da Inteligência Artificial. Mas, felizmente, muitos pesquisadores de IA estão trabalhando duro para resolver esse problema sob diferentes abordagens: algoritmos que ajudam a detectar/reduzir viés nos dados de treinamento ou reduzir o viés do modelo independente da qualidade dos dados; discutindo diferentes versões de justiça e assim por diante.
>“Consertar a discriminação em algoritmos não é algo que pode ser facilmente resolvido. É um processo contínuo, assim como a discriminação em qualquer espectro da sociedade”. (Selbst)

Este artigo foi escrito [Karen Hao](https://www.technologyreview.com/profile/karen-hao/) e traduzido para o português por [Carla Vieira](https://twitter.com/carlaprvieira). Se você tiver alguma sugestão de artigo sobre Inteligência Artificial e quer me ajudar a democratizar o conhecimento sobre o assunto pode entrar em contato comigo pelo Twitter.
# Comparação: CSS tradicional e XPath

Esta pasta junta os ficheiros específicos da comparação e este texto. O caso é o mesmo: entrar com e-mail e senha corretos e eliminar a conta. `entrarComCss.cy.js` usa CSS tradicional. `entrarComXpath.cy.js` usa XPath relativo, com os mesmos atributos.

| Ficheiro | Papel |
|---|---|
| `loginComparacao.elements.js` | mapa CSS (`loginCssElements`) e mapa XPath (`loginXpathComparacaoElements`) |
| `loginComparacao.page.js` | `entrarComCss` e `entrarComXpath` |
| `entrarComCss.cy.js` | spec do CSS tradicional |
| `entrarComXpath.cy.js` | spec do XPath |
| `README.md` | descrição da comparação |

O `cy.xpath` vem da biblioteca `cypress-xpath`, carregada em `cypress/support/e2e.js`.

O site não publica `data-cy`. O equivalente estável é `data-qa`, no mapa `cypress/elements/login.elements.js`, usado por `cypress/e2e/entrarUtilizador/entrarUtilizador.cy.js`.

## Como executar

Na pasta `WEB`, os dois specs desta pasta:

```bash
npx cypress run --spec "cypress/e2e/comparacaoCssXpath/entrarComCss.cy.js,cypress/e2e/comparacaoCssXpath/entrarComXpath.cy.js"
```

Cada spec cria uma conta, termina a sessão, entra e elimina a conta. O e-mail muda em cada corrida. A execução de 15 de outubro de 2026, no Cypress 13.7.3 com Electron 118 headless, ficou em 2 testes a passar e 0 a falhar, em 53 segundos. Esses tempos são da corrida em que os dois testes ainda estavam no mesmo ficheiro. A jornada de cada um é a mesma.

## Diferenças observadas

Os dois specs fazem a mesma jornada e usam as mesmas chaves no mapa: `campoEmail`, `campoSenha` e `botaoLogin`. A diferença que se vê no código está no valor do seletor. O CSS escreve `form[action="/login"] input[name="email"]`. O XPath escreve `//form[@action="/login"]//input[@name="email"]`. A intenção é a mesma. O XPath acrescenta barras, `@` e aspas, e o mapa fica mais difícil de ler. O `data-qa` do outro teste, `[data-qa=login-email]`, cabe numa expressão curta e o nome do atributo já identifica o campo. Neste site esse atributo ocupa o lugar do `data-cy`.

No Test Runner a velocidade não separou os dois pelo motor do seletor. O teste CSS demorou 26,2 segundos e o teste XPath demorou 24,9 segundos. O XPath acabou mais curto, cerca de 1,3 segundos, o contrário do que o custo da biblioteca faria esperar. Esse intervalo é o do site: criar a conta, sair, entrar e eliminar. O Cypress encontra o CSS com `document.querySelectorAll`, nativo no browser. O XPath passa pela biblioteca `cypress-xpath`, que interpreta a expressão em JavaScript. Com três campos por login, esse passo extra não chegou a notar-se.

A resiliência também coincidiu, porque os dois seletores agarram os mesmos atributos e nenhum nomeia `div`. Se essa tag passar a `section`, os dois continuam a encontrar o login. Os dois deixam de encontrar o campo ao mesmo tempo se `action="/login"` mudar, se o `name` do input for renomeado, ou se o botão deixar de ser `type="submit"`. Esse empate vem da forma como o XPath foi escrito: relativo, preso ao `form`, sem índice e sem caminho desde `/html/body`. Um XPath absoluto, dependente da árvore e da posição, partiria com a troca de tag. O `data-qa` fica à parte: ignora a tag e o lugar do campo, e só falha se o próprio atributo desaparecer ou mudar de nome.

Há uma diferença prática no formulário, comum aos dois estilos. `name="email"` existe no login e no Signup, e `button[type="submit"]` aparece três vezes na página. Por isso o seletor, seja CSS ou XPath, precisa do `form[action="/login"]` para apontar só ao login.

## Legibilidade

O XPath deixa o mapa mais poluído. A mesma intenção ocupa mais símbolos: `//`, `@`, aspas e parêntesis. O CSS tradicional lê-se como uma frase curta. O `data-qa` (o lugar do `data-cy` neste site) é o mais limpo dos três, porque o nome do atributo já diz qual é o campo.

E-mail de login, lado a lado:

```text
data-qa     [data-qa=login-email]
CSS         form[action="/login"] input[name="email"]
XPath       //form[@action="/login"]//input[@name="email"]
```

Senha:

```text
data-qa     [data-qa=login-password]
CSS         form[action="/login"] input[name="password"]
XPath       //form[@action="/login"]//input[@name="password"]
```

Botão:

```text
data-qa     [data-qa=login-button]
CSS         form[action="/login"] button[type="submit"]
XPath       //form[@action="/login"]//button[@type="submit"]
```

As chaves do mapa são as mesmas (`campoEmail`, `campoSenha`, `botaoLogin`). O que muda, e o que custa a ler, é o valor.

## Velocidade de execução

No Test Runner desta corrida não houve lentidão perceptível.

| Teste | Duração |
|---|---|
| CSS tradicional | 26,2 s |
| XPath | 24,9 s |

O XPath ficou cerca de 1,3 s mais curto. Os dois testes passam quase todo o tempo no site: criar a conta, terminar a sessão, entrar e eliminar. Esse tempo de rede e de página cobre qualquer custo do seletor.

O Cypress resolve CSS com `document.querySelectorAll`, nativo no browser. O XPath não tem esse atalho: o `cypress-xpath` interpreta a expressão em JavaScript e percorre o DOM. Esse passo existe e pode somar um overhead pequeno em páginas grandes ou em centenas de consultas. Neste caso, com três campos por login, esse overhead não aparece no runner.

## Manutenibilidade e resiliência

Se uma `div` passar a `section`, os dois seletores desta comparação continuam válidos. Nenhum dos dois nomeia `div`. Os dois agarram o `form` com `action="/login"` e, dentro dele, o `name` ou o `type` do controlo.

Partem os dois ao mesmo tempo quando muda o que eles realmente usam:

- `action="/login"` passa a outro caminho
- `name="email"` ou `name="password"` é renomeado
- o botão deixa de ser `button` ou deixa de ter `type="submit"`

O XPath absoluto é que quebra com a troca de tag. Um caminho como `/html/body/section/.../div[3]/form/input[1]` depende da árvore e da posição. `div` a virar `section`, ou um contentor novo no meio, parte esse seletor. Esse formato ficou de fora do mapa.

O `data-qa` aguenta melhor as duas mudanças. `[data-qa=login-email]` não olha para a tag nem para o sítio do campo no HTML. Só deixa de encontrar o elemento se o atributo for removido ou renomeado.

Entre o CSS e o XPath desta pasta, a resiliência é a mesma, porque os atributos são os mesmos. O XPath fica mais frágil no dia em que a expressão passa a descrever a estrutura (`//div[...]`, índices, caminho absoluto) em vez do atributo do campo.

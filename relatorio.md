# Relatório de testes

Atualizado em 30/10/2026, 14:20:41. O resumo abaixo é desta execução. O comparativo no fim guarda a última corrida de cada navegador.

## Resumo

| | |
|---|---|
| Cypress | 13.7.3 |
| Navegador | chrome 156.0.8078.49 |
| Sistema | win32 10.0.19045 |
| Início | 30/10/2026, 14:15:28 |
| Fim | 30/10/2026, 14:20:41 |
| Duração | 4 min 56s |
| Specs | 12 |
| Testes | 12 |
| Passou | 12 |
| Falhou | 0 |
| Pendente | 0 |
| Ignorado | 0 |

## Specs

| Spec | Testes | Passou | Falhou | Duração | Resultado |
|---|---:|---:|---:|---:|---|
| cypress\e2e\Caso de Teste 10 - Verificar Subscrição na Página Inicial\Caso de Teste 10 - Verificar Subscrição na Página Inicial.cy.js | 1 | 1 | 0 | 7s | passou |
| cypress\e2e\Caso de Teste 1 - Registar Utilizador\Caso de Teste 1 - Registar Utilizador.cy.js | 1 | 1 | 0 | 48s | passou |
| cypress\e2e\Caso de Teste 15 - Fazer Encomenda - Registar antes do Checkout\Caso de Teste 15 - Fazer Encomenda - Registar antes do Checkout.cy.js | 1 | 1 | 0 | 24s | passou |
| cypress\e2e\Caso de Teste 2 - Entrar com E-mail e Senha Corretos\Caso de Teste 2 - Entrar com E-mail e Senha Corretos.cy.js | 1 | 1 | 0 | 22s | passou |
| cypress\e2e\Caso de Teste 3 - Entrar com E-mail e Senha Incorretos\Caso de Teste 3 - Entrar com E-mail e Senha Incorretos.cy.js | 1 | 1 | 0 | 7s | passou |
| cypress\e2e\Caso de Teste 5 - Registar Utilizador com E-mail Existente\Caso de Teste 5 - Registar Utilizador com E-mail Existente.cy.js | 1 | 1 | 0 | 26s | passou |
| cypress\e2e\Caso de Teste 4 - Sair da Conta\Caso de Teste 4 - Sair da Conta.cy.js | 1 | 1 | 0 | 27s | passou |
| cypress\e2e\Caso de Teste 16 - Fazer Encomenda - Entrar antes do Checkout\Caso de Teste 16 - Fazer Encomenda - Entrar antes do Checkout.cy.js | 1 | 1 | 0 | 35s | passou |
| cypress\e2e\Caso de Teste 9 - Pesquisar Produto\Caso de Teste 9 - Pesquisar Produto.cy.js | 1 | 1 | 0 | 9s | passou |
| cypress\e2e\comparacaoCssXpath\entrarComCss.cy.js | 1 | 1 | 0 | 30s | passou |
| cypress\e2e\comparacaoCssXpath\entrarComXpath.cy.js | 1 | 1 | 0 | 27s | passou |
| cypress\e2e\entrarUtilizadorXpath\entrarUtilizadorXpath.cy.js | 1 | 1 | 0 | 33s | passou |

## Cenários

| Spec | Cenário | Resultado | Duração |
|---|---|---|---:|
| cypress\e2e\Caso de Teste 10 - Verificar Subscrição na Página Inicial\Caso de Teste 10 - Verificar Subscrição na Página Inicial.cy.js | deve confirmar a subscrição no rodapé | passou | 5s |
| cypress\e2e\Caso de Teste 1 - Registar Utilizador\Caso de Teste 1 - Registar Utilizador.cy.js | deve criar a conta, confirmar a sessão e eliminar a conta | passou | 46s |
| cypress\e2e\Caso de Teste 15 - Fazer Encomenda - Registar antes do Checkout\Caso de Teste 15 - Fazer Encomenda - Registar antes do Checkout.cy.js | deve registar a conta, pagar a encomenda e eliminar a conta | passou | 23s |
| cypress\e2e\Caso de Teste 2 - Entrar com E-mail e Senha Corretos\Caso de Teste 2 - Entrar com E-mail e Senha Corretos.cy.js | deve entrar com e-mail e senha corretos e eliminar a conta | passou | 21s |
| cypress\e2e\Caso de Teste 3 - Entrar com E-mail e Senha Incorretos\Caso de Teste 3 - Entrar com E-mail e Senha Incorretos.cy.js | deve mostrar o erro quando o e-mail e a senha estão errados | passou | 5s |
| cypress\e2e\Caso de Teste 5 - Registar Utilizador com E-mail Existente\Caso de Teste 5 - Registar Utilizador com E-mail Existente.cy.js | deve mostrar o erro quando o e-mail já está registado | passou | 24s |
| cypress\e2e\Caso de Teste 4 - Sair da Conta\Caso de Teste 4 - Sair da Conta.cy.js | deve terminar a sessão e voltar à página de login | passou | 26s |
| cypress\e2e\Caso de Teste 16 - Fazer Encomenda - Entrar antes do Checkout\Caso de Teste 16 - Fazer Encomenda - Entrar antes do Checkout.cy.js | deve entrar, pagar a encomenda e eliminar a conta | passou | 33s |
| cypress\e2e\Caso de Teste 9 - Pesquisar Produto\Caso de Teste 9 - Pesquisar Produto.cy.js | deve mostrar os produtos correspondentes à pesquisa | passou | 7s |
| cypress\e2e\comparacaoCssXpath\entrarComCss.cy.js | deve entrar com seletor CSS tradicional e eliminar a conta | passou | 28s |
| cypress\e2e\comparacaoCssXpath\entrarComXpath.cy.js | deve entrar com o mesmo caso adaptado a XPath e eliminar a conta | passou | 25s |
| cypress\e2e\entrarUtilizadorXpath\entrarUtilizadorXpath.cy.js | deve entrar com e-mail e senha corretos pelo XPath e eliminar a conta | passou | 31s |

## Comparativo de navegadores

Cada linha é a última execução daquele navegador. Rodar o mesmo navegador de novo substitui só a linha dele.

Electron levou 6 min 19s, Chrome levou 4 min 56s. Chrome teve a menor duração. Todos passaram.

| Navegador | Versão | Sistema | Início | Fim | Duração | Testes | Passou | Falhou | Resultado |
|---|---|---|---|---|---:|---:|---:|---:|---|
| Electron | 118.0.5993.159 | win32 10.0.19045 | 27/10/2026, 12:13:47 | 27/10/2026, 12:20:23 | 6 min 19s | 12 | 12 | 0 | passou |
| Chrome | 156.0.8078.49 | win32 10.0.19045 | 30/10/2026, 14:15:28 | 30/10/2026, 14:20:41 | 4 min 56s | 12 | 12 | 0 | passou |


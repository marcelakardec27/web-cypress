# Relatório de testes

Atualizado em 27/10/2026, 12:20:23. O resumo abaixo é desta execução. O comparativo no fim guarda a última corrida de cada navegador.

## Resumo

| | |
|---|---|
| Cypress | 13.7.3 |
| Navegador | electron 118.0.5993.159 |
| Sistema | win32 10.0.19045 |
| Início | 27/10/2026, 12:13:47 |
| Fim | 27/10/2026, 12:20:23 |
| Duração | 6 min 19s |
| Specs | 12 |
| Testes | 12 |
| Passou | 12 |
| Falhou | 0 |
| Pendente | 0 |
| Ignorado | 0 |

## Specs

| Spec | Testes | Passou | Falhou | Duração | Resultado |
|---|---:|---:|---:|---:|---|
| cypress\e2e\Caso de Teste 1 - Registar Utilizador\Caso de Teste 1 - Registar Utilizador.cy.js | 1 | 1 | 0 | 30s | passou |
| cypress\e2e\Caso de Teste 10 - Verificar Subscrição na Página Inicial\Caso de Teste 10 - Verificar Subscrição na Página Inicial.cy.js | 1 | 1 | 0 | 8s | passou |
| cypress\e2e\Caso de Teste 15 - Fazer Encomenda - Registar antes do Checkout\Caso de Teste 15 - Fazer Encomenda - Registar antes do Checkout.cy.js | 1 | 1 | 0 | 44s | passou |
| cypress\e2e\Caso de Teste 2 - Entrar com E-mail e Senha Corretos\Caso de Teste 2 - Entrar com E-mail e Senha Corretos.cy.js | 1 | 1 | 0 | 41s | passou |
| cypress\e2e\Caso de Teste 16 - Fazer Encomenda - Entrar antes do Checkout\Caso de Teste 16 - Fazer Encomenda - Entrar antes do Checkout.cy.js | 1 | 1 | 0 | 47s | passou |
| cypress\e2e\Caso de Teste 3 - Entrar com E-mail e Senha Incorretos\Caso de Teste 3 - Entrar com E-mail e Senha Incorretos.cy.js | 1 | 1 | 0 | 13s | passou |
| cypress\e2e\Caso de Teste 4 - Sair da Conta\Caso de Teste 4 - Sair da Conta.cy.js | 1 | 1 | 0 | 43s | passou |
| cypress\e2e\Caso de Teste 5 - Registar Utilizador com E-mail Existente\Caso de Teste 5 - Registar Utilizador com E-mail Existente.cy.js | 1 | 1 | 0 | 32s | passou |
| cypress\e2e\Caso de Teste 9 - Pesquisar Produto\Caso de Teste 9 - Pesquisar Produto.cy.js | 1 | 1 | 0 | 10s | passou |
| cypress\e2e\comparacaoCssXpath\entrarComCss.cy.js | 1 | 1 | 0 | 38s | passou |
| cypress\e2e\comparacaoCssXpath\entrarComXpath.cy.js | 1 | 1 | 0 | 32s | passou |
| cypress\e2e\entrarUtilizadorXpath\entrarUtilizadorXpath.cy.js | 1 | 1 | 0 | 40s | passou |

## Cenários

| Spec | Cenário | Resultado | Duração |
|---|---|---|---:|
| cypress\e2e\Caso de Teste 1 - Registar Utilizador\Caso de Teste 1 - Registar Utilizador.cy.js | deve criar a conta, confirmar a sessão e eliminar a conta | passou | 27s |
| cypress\e2e\Caso de Teste 10 - Verificar Subscrição na Página Inicial\Caso de Teste 10 - Verificar Subscrição na Página Inicial.cy.js | deve confirmar a subscrição no rodapé | passou | 6s |
| cypress\e2e\Caso de Teste 15 - Fazer Encomenda - Registar antes do Checkout\Caso de Teste 15 - Fazer Encomenda - Registar antes do Checkout.cy.js | deve registar a conta, pagar a encomenda e eliminar a conta | passou | 43s |
| cypress\e2e\Caso de Teste 2 - Entrar com E-mail e Senha Corretos\Caso de Teste 2 - Entrar com E-mail e Senha Corretos.cy.js | deve entrar com e-mail e senha corretos e eliminar a conta | passou | 39s |
| cypress\e2e\Caso de Teste 16 - Fazer Encomenda - Entrar antes do Checkout\Caso de Teste 16 - Fazer Encomenda - Entrar antes do Checkout.cy.js | deve entrar, pagar a encomenda e eliminar a conta | passou | 45s |
| cypress\e2e\Caso de Teste 3 - Entrar com E-mail e Senha Incorretos\Caso de Teste 3 - Entrar com E-mail e Senha Incorretos.cy.js | deve mostrar o erro quando o e-mail e a senha estão errados | passou | 11s |
| cypress\e2e\Caso de Teste 4 - Sair da Conta\Caso de Teste 4 - Sair da Conta.cy.js | deve terminar a sessão e voltar à página de login | passou | 40s |
| cypress\e2e\Caso de Teste 5 - Registar Utilizador com E-mail Existente\Caso de Teste 5 - Registar Utilizador com E-mail Existente.cy.js | deve mostrar o erro quando o e-mail já está registado | passou | 31s |
| cypress\e2e\Caso de Teste 9 - Pesquisar Produto\Caso de Teste 9 - Pesquisar Produto.cy.js | deve mostrar os produtos correspondentes à pesquisa | passou | 8s |
| cypress\e2e\comparacaoCssXpath\entrarComCss.cy.js | deve entrar com seletor CSS tradicional e eliminar a conta | passou | 36s |
| cypress\e2e\comparacaoCssXpath\entrarComXpath.cy.js | deve entrar com o mesmo caso adaptado a XPath e eliminar a conta | passou | 30s |
| cypress\e2e\entrarUtilizadorXpath\entrarUtilizadorXpath.cy.js | deve entrar com e-mail e senha corretos pelo XPath e eliminar a conta | passou | 38s |

## Comparativo de navegadores

Cada linha é a última execução daquele navegador. Rodar o mesmo navegador de novo substitui só a linha dele.

Electron levou 6 min 19s, Chrome levou 7 min 27s. Electron teve a menor duração. Todos passaram.

| Navegador | Versão | Sistema | Início | Fim | Duração | Testes | Passou | Falhou | Resultado |
|---|---|---|---|---|---:|---:|---:|---:|---|
| Electron | 118.0.5993.159 | win32 10.0.19045 | 27/10/2026, 12:13:47 | 27/10/2026, 12:20:23 | 6 min 19s | 12 | 12 | 0 | passou |
| Chrome | 156.0.8078.47 | win32 10.0.19045 | 27/10/2026, 12:05:27 | 27/10/2026, 12:13:10 | 7 min 27s | 12 | 12 | 0 | passou |


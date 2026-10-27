# Relatório de testes

Atualizado em 27/10/2026, 11:18:23. O resumo abaixo é desta execução. O comparativo no fim guarda a última corrida de cada navegador.

## Resumo

| | |
|---|---|
| Cypress | 13.7.3 |
| Navegador | firefox 128.14.0 |
| Sistema | win32 10.0.19045 |
| Início | 27/10/2026, 11:13:18 |
| Fim | 27/10/2026, 11:18:23 |
| Duração | 4 min 49s |
| Specs | 12 |
| Testes | 12 |
| Passou | 12 |
| Falhou | 0 |
| Pendente | 0 |
| Ignorado | 0 |

## Specs

| Spec | Testes | Passou | Falhou | Duração | Resultado |
|---|---:|---:|---:|---:|---|
| cypress\e2e\Caso de Teste 10 - Verificar Subscrição na Página Inicial\Caso de Teste 10 - Verificar Subscrição na Página Inicial.cy.js | 1 | 1 | 0 | 8s | passou |
| cypress\e2e\Caso de Teste 1 - Registar Utilizador\Caso de Teste 1 - Registar Utilizador.cy.js | 1 | 1 | 0 | 21s | passou |
| cypress\e2e\Caso de Teste 2 - Entrar com E-mail e Senha Corretos\Caso de Teste 2 - Entrar com E-mail e Senha Corretos.cy.js | 1 | 1 | 0 | 25s | passou |
| cypress\e2e\Caso de Teste 15 - Fazer Encomenda - Registar antes do Checkout\Caso de Teste 15 - Fazer Encomenda - Registar antes do Checkout.cy.js | 1 | 1 | 0 | 28s | passou |
| cypress\e2e\Caso de Teste 16 - Fazer Encomenda - Entrar antes do Checkout\Caso de Teste 16 - Fazer Encomenda - Entrar antes do Checkout.cy.js | 1 | 1 | 0 | 35s | passou |
| cypress\e2e\Caso de Teste 4 - Sair da Conta\Caso de Teste 4 - Sair da Conta.cy.js | 1 | 1 | 0 | 38s | passou |
| cypress\e2e\Caso de Teste 3 - Entrar com E-mail e Senha Incorretos\Caso de Teste 3 - Entrar com E-mail e Senha Incorretos.cy.js | 1 | 1 | 0 | 8s | passou |
| cypress\e2e\Caso de Teste 5 - Registar Utilizador com E-mail Existente\Caso de Teste 5 - Registar Utilizador com E-mail Existente.cy.js | 1 | 1 | 0 | 31s | passou |
| cypress\e2e\comparacaoCssXpath\entrarComCss.cy.js | 1 | 1 | 0 | 26s | passou |
| cypress\e2e\comparacaoCssXpath\entrarComXpath.cy.js | 1 | 1 | 0 | 34s | passou |
| cypress\e2e\Caso de Teste 9 - Pesquisar Produto\Caso de Teste 9 - Pesquisar Produto.cy.js | 1 | 1 | 0 | 9s | passou |
| cypress\e2e\entrarUtilizadorXpath\entrarUtilizadorXpath.cy.js | 1 | 1 | 0 | 28s | passou |

## Cenários

| Spec | Cenário | Resultado | Duração |
|---|---|---|---:|
| cypress\e2e\Caso de Teste 10 - Verificar Subscrição na Página Inicial\Caso de Teste 10 - Verificar Subscrição na Página Inicial.cy.js | deve confirmar a subscrição no rodapé | passou | 6s |
| cypress\e2e\Caso de Teste 1 - Registar Utilizador\Caso de Teste 1 - Registar Utilizador.cy.js | deve criar a conta, confirmar a sessão e eliminar a conta | passou | 19s |
| cypress\e2e\Caso de Teste 2 - Entrar com E-mail e Senha Corretos\Caso de Teste 2 - Entrar com E-mail e Senha Corretos.cy.js | deve entrar com e-mail e senha corretos e eliminar a conta | passou | 23s |
| cypress\e2e\Caso de Teste 15 - Fazer Encomenda - Registar antes do Checkout\Caso de Teste 15 - Fazer Encomenda - Registar antes do Checkout.cy.js | deve registar a conta, pagar a encomenda e eliminar a conta | passou | 26s |
| cypress\e2e\Caso de Teste 16 - Fazer Encomenda - Entrar antes do Checkout\Caso de Teste 16 - Fazer Encomenda - Entrar antes do Checkout.cy.js | deve entrar, pagar a encomenda e eliminar a conta | passou | 34s |
| cypress\e2e\Caso de Teste 4 - Sair da Conta\Caso de Teste 4 - Sair da Conta.cy.js | deve terminar a sessão e voltar à página de login | passou | 36s |
| cypress\e2e\Caso de Teste 3 - Entrar com E-mail e Senha Incorretos\Caso de Teste 3 - Entrar com E-mail e Senha Incorretos.cy.js | deve mostrar o erro quando o e-mail e a senha estão errados | passou | 6s |
| cypress\e2e\Caso de Teste 5 - Registar Utilizador com E-mail Existente\Caso de Teste 5 - Registar Utilizador com E-mail Existente.cy.js | deve mostrar o erro quando o e-mail já está registado | passou | 28s |
| cypress\e2e\comparacaoCssXpath\entrarComCss.cy.js | deve entrar com seletor CSS tradicional e eliminar a conta | passou | 25s |
| cypress\e2e\comparacaoCssXpath\entrarComXpath.cy.js | deve entrar com o mesmo caso adaptado a XPath e eliminar a conta | passou | 32s |
| cypress\e2e\Caso de Teste 9 - Pesquisar Produto\Caso de Teste 9 - Pesquisar Produto.cy.js | deve mostrar os produtos correspondentes à pesquisa | passou | 7s |
| cypress\e2e\entrarUtilizadorXpath\entrarUtilizadorXpath.cy.js | deve entrar com e-mail e senha corretos pelo XPath e eliminar a conta | passou | 26s |

## Comparativo de navegadores

Cada linha é a última execução daquele navegador. Rodar o mesmo navegador de novo substitui só a linha dele.

Electron levou 4 min 14s, Chrome levou 3 min 53s, Firefox levou 4 min 49s, Edge levou 3 min 59s. Chrome teve a menor duração. Todos passaram.

| Navegador | Versão | Sistema | Início | Fim | Duração | Testes | Passou | Falhou | Resultado |
|---|---|---|---|---|---:|---:|---:|---:|---|
| Electron | 118.0.5993.159 | win32 10.0.19045 | 27/10/2026, 11:01:23 | 27/10/2026, 11:05:53 | 4 min 14s | 12 | 12 | 0 | passou |
| Chrome | 156.0.8078.47 | win32 10.0.19045 | 27/10/2026, 10:42:23 | 27/10/2026, 10:46:32 | 3 min 53s | 12 | 12 | 0 | passou |
| Firefox | 128.14.0 | win32 10.0.19045 | 27/10/2026, 11:13:18 | 27/10/2026, 11:18:23 | 4 min 49s | 12 | 12 | 0 | passou |
| Edge | 156.0.4314.42 | win32 10.0.19045 | 27/10/2026, 10:48:42 | 27/10/2026, 10:52:57 | 3 min 59s | 12 | 12 | 0 | passou |


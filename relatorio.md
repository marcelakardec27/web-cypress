# Relatório de testes

Atualizado em 27/10/2026, 09:40:44. Este arquivo é substituído no fim de cada `cypress run`.

## Resumo

| | |
|---|---|
| Cypress | 13.7.3 |
| Navegador | electron 118.0.5993.159 |
| Sistema | win32 10.0.19045 |
| Início | 27/10/2026, 09:35:13 |
| Fim | 27/10/2026, 09:40:44 |
| Duração | 5 min 14s |
| Specs | 12 |
| Testes | 12 |
| Passou | 12 |
| Falhou | 0 |
| Pendente | 0 |
| Ignorado | 0 |

## Specs

| Spec | Testes | Passou | Falhou | Duração | Resultado |
|---|---:|---:|---:|---:|---|
| cypress\e2e\Caso de Teste 1 - Registar Utilizador\Caso de Teste 1 - Registar Utilizador.cy.js | 1 | 1 | 0 | 22s | passou |
| cypress\e2e\Caso de Teste 15 - Fazer Encomenda - Registar antes do Checkout\Caso de Teste 15 - Fazer Encomenda - Registar antes do Checkout.cy.js | 1 | 1 | 0 | 28s | passou |
| cypress\e2e\Caso de Teste 16 - Fazer Encomenda - Entrar antes do Checkout\Caso de Teste 16 - Fazer Encomenda - Entrar antes do Checkout.cy.js | 1 | 1 | 0 | 35s | passou |
| cypress\e2e\Caso de Teste 2 - Entrar com E-mail e Senha Corretos\Caso de Teste 2 - Entrar com E-mail e Senha Corretos.cy.js | 1 | 1 | 0 | 24s | passou |
| cypress\e2e\Caso de Teste 10 - Verificar Subscrição na Página Inicial\Caso de Teste 10 - Verificar Subscrição na Página Inicial.cy.js | 1 | 1 | 0 | 5s | passou |
| cypress\e2e\Caso de Teste 3 - Entrar com E-mail e Senha Incorretos\Caso de Teste 3 - Entrar com E-mail e Senha Incorretos.cy.js | 1 | 1 | 0 | 6s | passou |
| cypress\e2e\Caso de Teste 4 - Sair da Conta\Caso de Teste 4 - Sair da Conta.cy.js | 1 | 1 | 0 | 33s | passou |
| cypress\e2e\Caso de Teste 5 - Registar Utilizador com E-mail Existente\Caso de Teste 5 - Registar Utilizador com E-mail Existente.cy.js | 1 | 1 | 0 | 31s | passou |
| cypress\e2e\Caso de Teste 9 - Pesquisar Produto\Caso de Teste 9 - Pesquisar Produto.cy.js | 1 | 1 | 0 | 15s | passou |
| cypress\e2e\entrarUtilizadorXpath\entrarUtilizadorXpath.cy.js | 1 | 1 | 0 | 38s | passou |
| cypress\e2e\comparacaoCssXpath\entrarComCss.cy.js | 1 | 1 | 0 | 32s | passou |
| cypress\e2e\comparacaoCssXpath\entrarComXpath.cy.js | 1 | 1 | 0 | 46s | passou |

## Cenários

### cypress\e2e\Caso de Teste 1 - Registar Utilizador\Caso de Teste 1 - Registar Utilizador.cy.js

- passou: deve criar a conta, confirmar a sessão e eliminar a conta (19s)

### cypress\e2e\Caso de Teste 15 - Fazer Encomenda - Registar antes do Checkout\Caso de Teste 15 - Fazer Encomenda - Registar antes do Checkout.cy.js

- passou: deve registar a conta, pagar a encomenda e eliminar a conta (26s)

### cypress\e2e\Caso de Teste 16 - Fazer Encomenda - Entrar antes do Checkout\Caso de Teste 16 - Fazer Encomenda - Entrar antes do Checkout.cy.js

- passou: deve entrar, pagar a encomenda e eliminar a conta (33s)

### cypress\e2e\Caso de Teste 2 - Entrar com E-mail e Senha Corretos\Caso de Teste 2 - Entrar com E-mail e Senha Corretos.cy.js

- passou: deve entrar com e-mail e senha corretos e eliminar a conta (22s)

### cypress\e2e\Caso de Teste 10 - Verificar Subscrição na Página Inicial\Caso de Teste 10 - Verificar Subscrição na Página Inicial.cy.js

- passou: deve confirmar a subscrição no rodapé (3s)

### cypress\e2e\Caso de Teste 3 - Entrar com E-mail e Senha Incorretos\Caso de Teste 3 - Entrar com E-mail e Senha Incorretos.cy.js

- passou: deve mostrar o erro quando o e-mail e a senha estão errados (4s)

### cypress\e2e\Caso de Teste 4 - Sair da Conta\Caso de Teste 4 - Sair da Conta.cy.js

- passou: deve terminar a sessão e voltar à página de login (32s)

### cypress\e2e\Caso de Teste 5 - Registar Utilizador com E-mail Existente\Caso de Teste 5 - Registar Utilizador com E-mail Existente.cy.js

- passou: deve mostrar o erro quando o e-mail já está registado (29s)

### cypress\e2e\Caso de Teste 9 - Pesquisar Produto\Caso de Teste 9 - Pesquisar Produto.cy.js

- passou: deve mostrar os produtos correspondentes à pesquisa (13s)

### cypress\e2e\entrarUtilizadorXpath\entrarUtilizadorXpath.cy.js

- passou: deve entrar com e-mail e senha corretos pelo XPath e eliminar a conta (36s)

### cypress\e2e\comparacaoCssXpath\entrarComCss.cy.js

- passou: deve entrar com seletor CSS tradicional e eliminar a conta (30s)

### cypress\e2e\comparacaoCssXpath\entrarComXpath.cy.js

- passou: deve entrar com o mesmo caso adaptado a XPath e eliminar a conta (44s)


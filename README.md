# Automação WEB — Automation Exercise

## Objetivo

Esta suite verifica, no navegador, os fluxos de conta, pesquisa, assinatura e pedido do site [Automation Exercise](http://automationexercise.com). Cada cenário segue a descrição oficial do caso e confirma o que o usuário vê: página, mensagem, sessão ou pedido.

O resultado esperado é o comportamento do site. A conta criada em uma execução é excluída no fim, para a execução seguinte não encontrar esse e-mail.

## Descrição

Os testes rodam em Cypress contra `http://automationexercise.com`. O site não mantém um usuário fixo. Quando a descrição parte de uma conta já existente, o cenário cria essa conta antes dos passos oficiais e, se a descrição não pedir para excluí-la, exclui no fim.

O e-mail de cada execução é novo. A senha e o endereço vêm da fixture `cypress/fixtures/utilizador.json`. O cartão dos pedidos é fictício.

No GitHub Actions a suite roda no Chrome, no Firefox e no Edge. Na máquina local, o navegador entra com `--browser chrome`, `--browser firefox` ou `--browser edge`.

Para executar os nove casos:

```powershell
npx cypress run --spec "cypress/e2e/Caso de Teste 1 - Registar Utilizador/Caso de Teste 1 - Registar Utilizador.cy.js,cypress/e2e/Caso de Teste 2 - Entrar com E-mail e Senha Corretos/Caso de Teste 2 - Entrar com E-mail e Senha Corretos.cy.js,cypress/e2e/Caso de Teste 3 - Entrar com E-mail e Senha Incorretos/Caso de Teste 3 - Entrar com E-mail e Senha Incorretos.cy.js,cypress/e2e/Caso de Teste 4 - Sair da Conta/Caso de Teste 4 - Sair da Conta.cy.js,cypress/e2e/Caso de Teste 5 - Registar Utilizador com E-mail Existente/Caso de Teste 5 - Registar Utilizador com E-mail Existente.cy.js,cypress/e2e/Caso de Teste 9 - Pesquisar Produto/Caso de Teste 9 - Pesquisar Produto.cy.js,cypress/e2e/Caso de Teste 10 - Verificar Subscrição na Página Inicial/Caso de Teste 10 - Verificar Subscrição na Página Inicial.cy.js,cypress/e2e/Caso de Teste 15 - Fazer Encomenda - Registar antes do Checkout/Caso de Teste 15 - Fazer Encomenda - Registar antes do Checkout.cy.js,cypress/e2e/Caso de Teste 16 - Fazer Encomenda - Entrar antes do Checkout/Caso de Teste 16 - Fazer Encomenda - Entrar antes do Checkout.cy.js"
```

## Casos de teste

| Caso | Título | Spec |
|------|--------|------|
| 1 | Caso de Teste 1 - Registar Utilizador | `cypress/e2e/Caso de Teste 1 - Registar Utilizador/Caso de Teste 1 - Registar Utilizador.cy.js` |
| 2 | Caso de Teste 2 - Entrar com E-mail e Senha Corretos | `cypress/e2e/Caso de Teste 2 - Entrar com E-mail e Senha Corretos/Caso de Teste 2 - Entrar com E-mail e Senha Corretos.cy.js` |
| 3 | Caso de Teste 3 - Entrar com E-mail e Senha Incorretos | `cypress/e2e/Caso de Teste 3 - Entrar com E-mail e Senha Incorretos/Caso de Teste 3 - Entrar com E-mail e Senha Incorretos.cy.js` |
| 4 | Caso de Teste 4 - Sair da Conta | `cypress/e2e/Caso de Teste 4 - Sair da Conta/Caso de Teste 4 - Sair da Conta.cy.js` |
| 5 | Caso de Teste 5 - Registar Utilizador com E-mail Existente | `cypress/e2e/Caso de Teste 5 - Registar Utilizador com E-mail Existente/Caso de Teste 5 - Registar Utilizador com E-mail Existente.cy.js` |
| 9 | Caso de Teste 9 - Pesquisar Produto | `cypress/e2e/Caso de Teste 9 - Pesquisar Produto/Caso de Teste 9 - Pesquisar Produto.cy.js` |
| 10 | Caso de Teste 10 - Verificar Subscrição na Página Inicial | `cypress/e2e/Caso de Teste 10 - Verificar Subscrição na Página Inicial/Caso de Teste 10 - Verificar Subscrição na Página Inicial.cy.js` |
| 15 | Caso de Teste 15 - Fazer Encomenda - Registar antes do Checkout | `cypress/e2e/Caso de Teste 15 - Fazer Encomenda - Registar antes do Checkout/Caso de Teste 15 - Fazer Encomenda - Registar antes do Checkout.cy.js` |
| 16 | Caso de Teste 16 - Fazer Encomenda - Entrar antes do Checkout | `cypress/e2e/Caso de Teste 16 - Fazer Encomenda - Entrar antes do Checkout/Caso de Teste 16 - Fazer Encomenda - Entrar antes do Checkout.cy.js` |

### Caso de Teste 1 - Registar Utilizador

```gherkin
# language: pt
Funcionalidade: Register User

  Cenário: Criar a conta, confirmar a sessão e excluir a conta
    Dado que o navegador está aberto
    E que o usuário acessa "http://automationexercise.com"
    Então a página inicial está visível
    Quando clica em "Signup / Login"
    Então "New User Signup!" está visível
    Quando digita o nome e um e-mail novo
    E clica em "Signup"
    Então "ENTER ACCOUNT INFORMATION" está visível
    Quando preenche título, nome, e-mail, senha e data de nascimento
    E marca "Sign up for our newsletter!"
    E marca "Receive special offers from our partners!"
    E preenche nome, sobrenome, empresa, endereço, país, estado, cidade, CEP e celular
    E clica em "Create Account"
    Então "ACCOUNT CREATED!" está visível
    Quando clica em "Continue"
    Então "Logged in as username" está visível no topo
    Quando clica em "Delete Account"
    Então "ACCOUNT DELETED!" está visível
    Quando clica em "Continue"
```

### Caso de Teste 2 - Entrar com E-mail e Senha Corretos

```gherkin
# language: pt
Funcionalidade: Login User with correct email and password

  Contexto: existe uma conta e a sessão está fechada
    Dado que foi criada uma conta com e-mail novo
    E que a sessão dessa conta foi terminada

  Cenário: Entrar com e-mail e senha corretos e excluir a conta
    Dado que o navegador está aberto
    E que o usuário acessa "http://automationexercise.com"
    Então a página inicial está visível
    Quando clica em "Signup / Login"
    Então "Login to your account" está visível
    Quando digita o e-mail e a senha corretos
    E clica em "login"
    Então "Logged in as username" está visível no topo
    Quando clica em "Delete Account"
    Então "ACCOUNT DELETED!" está visível
```

### Caso de Teste 3 - Entrar com E-mail e Senha Incorretos

```gherkin
# language: pt
Funcionalidade: Login User with incorrect email and password

  Cenário: Mostrar o erro quando o e-mail e a senha estão errados
    Dado que o navegador está aberto
    E que o usuário acessa "http://automationexercise.com"
    Então a página inicial está visível
    Quando clica em "Signup / Login"
    Então "Login to your account" está visível
    Quando digita um e-mail que não existe e uma senha incorreta
    E clica em "login"
    Então o erro "Your email or password is incorrect!" está visível
```

### Caso de Teste 4 - Sair da Conta

```gherkin
# language: pt
Funcionalidade: Logout User

  Contexto: existe uma conta e a sessão está fechada
    Dado que foi criada uma conta com e-mail novo
    E que a sessão dessa conta foi terminada

  Cenário: Encerrar a sessão e voltar para a página de login
    Dado que o navegador está aberto
    E que o usuário acessa "http://automationexercise.com"
    Então a página inicial está visível
    Quando clica em "Signup / Login"
    Então "Login to your account" está visível
    Quando digita o e-mail e a senha corretos
    E clica em "login"
    Então "Logged in as username" está visível no topo
    Quando clica em "Logout"
    Então o usuário está na página de login

  Cenário: Excluir a conta criada no contexto
    Quando entra de novo com o e-mail e a senha dessa conta
    E clica em "Delete Account"
    Então "ACCOUNT DELETED!" está visível
```

### Caso de Teste 5 - Registar Utilizador com E-mail Existente

```gherkin
# language: pt
Funcionalidade: Register User with existing email

  Contexto: o e-mail já está cadastrado e a sessão está fechada
    Dado que foi criada uma conta com e-mail novo
    E que a sessão dessa conta foi terminada

  Cenário: Mostrar o erro quando o e-mail já está cadastrado
    Dado que o navegador está aberto
    E que o usuário acessa "http://automationexercise.com"
    Então a página inicial está visível
    Quando clica em "Signup / Login"
    Então "New User Signup!" está visível
    Quando digita o nome e o e-mail já cadastrado
    E clica em "Signup"
    Então o erro "Email Address already exist!" está visível

  Cenário: Excluir a conta criada no contexto
    Quando entra com o e-mail e a senha dessa conta
    E clica em "Delete Account"
    Então "ACCOUNT DELETED!" está visível
```

### Caso de Teste 9 - Pesquisar Produto

```gherkin
# language: pt
Funcionalidade: Search Product

  Cenário: Mostrar os produtos correspondentes à pesquisa
    Dado que o navegador está aberto
    E que o usuário acessa "http://automationexercise.com"
    Então a página inicial está visível
    Quando clica em "Products"
    Então a página "ALL PRODUCTS" está visível
    Quando digita "Blue Top" na pesquisa
    E clica no botão de pesquisar
    Então "SEARCHED PRODUCTS" está visível
    E todos os produtos visíveis estão relacionados a "Blue Top"
```

### Caso de Teste 10 - Verificar Subscrição na Página Inicial

```gherkin
# language: pt
Funcionalidade: Verify Subscription in home page

  Cenário: Confirmar a assinatura no rodapé
    Dado que o navegador está aberto
    E que o usuário acessa "http://automationexercise.com"
    Então a página inicial está visível
    Quando desce até o rodapé
    Então o texto "SUBSCRIPTION" está visível
    Quando digita um e-mail
    E clica na seta de assinatura
    Então "You have been successfully subscribed!" está visível
```

### Caso de Teste 15 - Fazer Encomenda - Registar antes do Checkout

```gherkin
# language: pt
Funcionalidade: Place Order: Register before Checkout

  Cenário: Cadastrar a conta, pagar o pedido e excluir a conta
    Dado que o navegador está aberto
    E que o usuário acessa "http://automationexercise.com"
    Então a página inicial está visível
    Quando clica em "Signup / Login"
    E preenche o Signup e cria a conta
    Então "ACCOUNT CREATED!" está visível
    Quando clica em "Continue"
    Então "Logged in as username" está visível no topo
    Quando adiciona o produto "Blue Top" ao carrinho
    E clica em "Cart"
    Então a página do carrinho está visível com "Blue Top"
    Quando clica em "Proceed To Checkout"
    Então "Address Details" e "Review Your Order" estão visíveis
    Quando escreve um comentário no pedido
    E clica em "Place Order"
    E digita o nome no cartão, o número, o CVC e a data de validade
    E clica em "Pay and Confirm Order"
    Então "Your order has been placed successfully!" está visível
    Quando clica em "Delete Account"
    Então "ACCOUNT DELETED!" está visível
    Quando clica em "Continue"
```

### Caso de Teste 16 - Fazer Encomenda - Entrar antes do Checkout

```gherkin
# language: pt
Funcionalidade: Place Order: Login before Checkout

  Contexto: existe uma conta e a sessão está fechada
    Dado que foi criada uma conta com e-mail novo
    E que a sessão dessa conta foi terminada

  Cenário: Entrar, pagar o pedido e excluir a conta
    Dado que o navegador está aberto
    E que o usuário acessa "http://automationexercise.com"
    Então a página inicial está visível
    Quando clica em "Signup / Login"
    E digita o e-mail e a senha e clica em "Login"
    Então "Logged in as username" está visível no topo
    Quando adiciona o produto "Blue Top" ao carrinho
    E clica em "Cart"
    Então a página do carrinho está visível com "Blue Top"
    Quando clica em "Proceed To Checkout"
    Então "Address Details" e "Review Your Order" estão visíveis
    Quando escreve um comentário no pedido
    E clica em "Place Order"
    E digita o nome no cartão, o número, o CVC e a data de validade
    E clica em "Pay and Confirm Order"
    Então "Your order has been placed successfully!" está visível
    Quando clica em "Delete Account"
    Então "ACCOUNT DELETED!" está visível
    Quando clica em "Continue"
```

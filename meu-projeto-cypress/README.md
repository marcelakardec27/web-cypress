# meu-projeto-cypress

Canal WEB, Cypress em JavaScript. O cenário não contém seletor: o mapa guarda o alvo, a page executa a ação.

## Árvore

```
meu-projeto-cypress/
├── cypress/
│   ├── e2e/login/login.cy.js
│   ├── elements/login.elements.js
│   ├── fixtures/usuarios.json
│   ├── pages/login.page.js
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── cypress.config.js
├── package.json
└── README.md
```

## Mapa

| Chave | Seletor | Nível |
|-------|---------|-------|
| `campoEmail` | `[data-cy=email]` | 1, atributo de automação |
| `campoSenha` | `[data-cy=senha]` | 1, atributo de automação |
| `botaoEntrar` | `[data-cy=entrar]` | 1, atributo de automação |

A aplicação em `baseUrl` (`http://localhost:3000`) tem de expor estes `data-cy` em `/login` e redirecionar para `/painel` depois de entrar.

## Correr

```bash
npm install
npm run cy:open
npm run cy:run
```

A massa em `cypress/fixtures/usuarios.json` é fictícia. Não colocar credenciais reais.

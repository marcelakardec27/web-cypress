// Canal WEB, Cypress. Comandos reutilizáveis.
// O comando delega na page para não repetir seletores.

import { loginPage } from '../pages/login.page'

Cypress.Commands.add('login', (email, senha) => {
  loginPage.entrar(email, senha)
})

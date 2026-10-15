// Canal WEB, Cypress. Cenário do fluxo de login.
// Não contém seletor: arrange, act e assert por comportamento observável.

import { loginPage } from '../../pages/login.page'

describe('login', () => {
  it('deve abrir o painel com credenciais válidas', () => {
    cy.fixture('usuarios').then((usuarios) => {
      loginPage.visitar()
      loginPage.entrar(usuarios.valido.email, usuarios.valido.senha)
      cy.url().should('include', '/painel')
    })
  })
})

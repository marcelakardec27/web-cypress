// Canal WEB, Cypress. Ações do ecrã de login.
// Consome loginElements; não repete a string do seletor.

import { loginElements as el } from '../elements/login.elements'

export const loginPage = {
  visitar() {
    cy.visit('/login')
  },
  entrar(email, senha) {
    cy.get(el.campoEmail).clear().type(email)
    // A senha não entra no log do Cypress.
    cy.get(el.campoSenha).clear().type(senha, { log: false })
    cy.get(el.botaoEntrar).click()
  },
}

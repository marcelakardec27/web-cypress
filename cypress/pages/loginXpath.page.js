// Canal WEB, Cypress. Ações XPath da seção Login to your account.
// Consome loginXpathElements; não repete a string do seletor.
// cy.xpath vem de cypress-xpath, carregado em support/e2e.js.

import { loginXpathElements as el } from '../elements/loginXpath.elements'

export const loginXpathPage = {
  verLogin() {
    cy.contains(el.tituloLogin).should('be.visible')
  },
  entrar(email, senha) {
    cy.xpath(el.campoEmail).clear().type(email)
    cy.xpath(el.campoSenha).clear().type(senha, { log: false })
    cy.xpath(el.botaoLogin).click()
  },
}

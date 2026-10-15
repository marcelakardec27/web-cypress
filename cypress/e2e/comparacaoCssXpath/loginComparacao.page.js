// Canal WEB, Cypress. Ações de comparação do login: CSS tradicional e XPath.
// Consome loginComparacao.elements.js, nesta pasta; não repete a string do seletor.
// cy.xpath vem de cypress-xpath, carregado em support/e2e.js.

import {
  loginCssElements as css,
  loginXpathComparacaoElements as xpath,
} from './loginComparacao.elements'

export const loginComparacaoPage = {
  verLogin() {
    cy.contains(css.tituloLogin).should('be.visible')
  },
  entrarComCss(email, senha) {
    cy.get(css.campoEmail).clear().type(email)
    cy.get(css.campoSenha).clear().type(senha, { log: false })
    cy.get(css.botaoLogin).click()
  },
  entrarComXpath(email, senha) {
    cy.xpath(xpath.campoEmail).clear().type(email)
    cy.xpath(xpath.campoSenha).clear().type(senha, { log: false })
    cy.xpath(xpath.botaoLogin).click()
  },
}

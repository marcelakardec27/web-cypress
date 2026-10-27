// Canal WEB, Cypress. Ações da tela Shopping Cart.
// Consome carrinhoElements; não repete a string do seletor.

import { carrinhoElements as el } from '../elements/carrinho.elements'

export const carrinhoPage = {
  verCarrinho() {
    cy.url().should('include', '/view_cart')
    cy.contains(el.tituloCarrinho).should('be.visible')
  },
  verProduto(nome) {
    cy.get(el.produto).should('be.visible').and('contain', nome)
  },
  avancarParaCheckout() {
    cy.get(el.botaoCheckout).should('contain', 'Proceed To Checkout').scrollIntoView().click()
  },
}

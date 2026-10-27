// Canal WEB, Cypress. Ações da tela Products.
// Consome produtosElements; não repete a string do seletor.

import { produtosElements as el } from '../elements/produtos.elements'

export const produtosPage = {
  verTodosOsProdutos() {
    cy.url().should('include', '/products')
    cy.contains(el.tituloTodosOsProdutos).should('be.visible').and(($titulo) => {
      expect($titulo.text().trim().toUpperCase()).to.eq('ALL PRODUCTS')
    })
  },
  pesquisar(termo) {
    cy.get(el.campoPesquisa).clear().type(termo)
    cy.get(el.botaoPesquisar).click()
  },
  verTituloPesquisados() {
    // A pesquisa navega para /products?search= e troca o título da lista.
    cy.url().should('include', '/products?search=')
    cy.contains(el.tituloPesquisados).should('be.visible').and(($titulo) => {
      expect($titulo.text().trim().toUpperCase()).to.eq('SEARCHED PRODUCTS')
    })
  },
  verProdutosRelacionados(termo) {
    cy.get(el.nomeProduto).should('have.length.at.least', 1).each(($nome) => {
      expect($nome.text().toLowerCase()).to.include(termo.toLowerCase())
    })
  },
}

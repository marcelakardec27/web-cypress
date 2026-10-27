// Canal WEB, Cypress. Ações da tela Payment.
// Consome pagamentoElements; não repete a string do seletor.

import { pagamentoElements as el } from '../elements/pagamento.elements'

export const pagamentoPage = {
  preencher(cartao) {
    cy.get(el.campoNomeCartao).type(cartao.nome)
    cy.get(el.campoNumeroCartao).type(cartao.numero)
    cy.get(el.campoCvc).type(cartao.cvc)
    cy.get(el.campoMes).type(cartao.mes)
    cy.get(el.campoAno).type(cartao.ano)
  },
  confirmar() {
    // A frase aparece no envio e o navegador sai da página no mesmo POST.
    cy.get(el.formulario).then(($form) => {
      $form.on('submit', () => {
        const mensagem = $form[0].ownerDocument.querySelector(el.mensagemSucesso)
        expect(mensagem, 'mensagem de encomenda').to.exist
        expect(mensagem.className).to.not.match(/\bhide\b/)
        expect(mensagem.innerText).to.include(el.textoSucesso)
      })
    })
    cy.get(el.botaoPagar).click()
  },
}

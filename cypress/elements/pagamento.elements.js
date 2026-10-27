// Canal WEB, Cypress. Mapa da tela Payment (Automation Exercise).
// Só seletores. As ações vivem em pages/pagamento.page.js.

export const pagamentoElements = {
  // Nível 3: o formulário não tem data-qa. O id payment-form é estável.
  formulario: '#payment-form',
  // Nível 1: data-qa do nome no cartão.
  campoNomeCartao: '[data-qa=name-on-card]',
  // Nível 1: data-qa do número do cartão.
  campoNumeroCartao: '[data-qa=card-number]',
  // Nível 1: data-qa do CVC.
  campoCvc: '[data-qa=cvc]',
  // Nível 1: data-qa do mês de validade.
  campoMes: '[data-qa=expiry-month]',
  // Nível 1: data-qa do ano de validade.
  campoAno: '[data-qa=expiry-year]',
  // Nível 1: data-qa do botão Pay and Confirm Order.
  botaoPagar: '[data-qa=pay-button]',
  // Nível 3: a frase de sucesso não tem data-qa. O id success_message é estável.
  mensagemSucesso: '#success_message',
  // Nível 5: a frase é o contrato do caso. O POST seguinte tira a frase da tela.
  textoSucesso: 'Your order has been placed successfully!',
}

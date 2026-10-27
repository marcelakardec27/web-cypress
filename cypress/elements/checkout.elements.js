// Canal WEB, Cypress. Mapa da tela Checkout (Automation Exercise).
// Só seletores. As ações vivem em pages/checkout.page.js.

export const checkoutElements = {
  // Nível 5: "Address Details" é o contrato do caso. O h2 não tem data-qa.
  tituloMorada: 'Address Details',
  // Nível 1: o site publica data-qa no bloco de endereços.
  blocoMorada: '[data-qa=checkout-info]',
  // Nível 3: o endereço de entrega não tem data-qa próprio. O id address_delivery é estável.
  moradaEntrega: '#address_delivery',
  // Nível 5: "Review Your Order" é o contrato do caso. O h2 não tem data-qa.
  tituloRevisao: 'Review Your Order',
  // Nível 2: a linha do Blue Top não tem data-qa. O href /product_details/1 é estável.
  produtoEncomendado: '#cart_info a[href="/product_details/1"]',
  // Nível 4: o comentário não tem data-qa. O name message é o do formulário.
  campoComentario: 'textarea[name="message"]',
  // Nível 2: "Place Order" não tem data-qa. O href /payment é estável.
  botaoEncomendar: 'a[href="/payment"]',
}

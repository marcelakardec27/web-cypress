// Canal WEB, Cypress. Mapa da tela Shopping Cart (Automation Exercise).
// Só seletores. As ações vivem em pages/carrinho.page.js.

export const carrinhoElements = {
  // Nível 5: "Shopping Cart" é o contrato do caso. O breadcrumb não tem data-qa.
  tituloCarrinho: 'Shopping Cart',
  // Nível 3: a linha do produto não tem data-qa. O id product-1 é o do Blue Top no carrinho.
  produto: '#product-1',
  // Nível 3: "Proceed To Checkout" não tem data-qa. A classe check_out é o gancho do site, sem hash.
  botaoCheckout: 'a.check_out',
}

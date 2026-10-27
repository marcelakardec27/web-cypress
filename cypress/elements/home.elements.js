// Canal WEB, Cypress. Mapa da tela inicial (Automation Exercise).
// Só seletores. As ações vivem em pages/home.page.js.

export const homeElements = {
  // Nível 2: não há data-cy nem data-qa. A imagem tem nome acessível estável no alt.
  logotipo: 'img[alt="Website for automation practice"]',
  // Nível 2: link com nome "Signup / Login". O href /login aponta para o mesmo alvo.
  botaoSignupLogin: 'a[href="/login"]',
  // Nível 3: o link "Logged in as" não tem data-qa. O id #header não é gerado em runtime.
  indicadorSessao: '#header',
  // Nível 2: link com nome "Delete Account". O href /delete_account é estável.
  botaoEliminarConta: 'a[href="/delete_account"]',
  // Nível 2: link com nome "Logout". Não há data-qa. O href /logout é estável.
  botaoLogout: 'a[href="/logout"]',
  // Nível 2: link com nome "Products". Não há data-qa. O href /products é estável.
  botaoProdutos: 'a[href="/products"]',
  // Nível 3: o link "Cart" não tem data-qa. O id #header não é gerado; o href /view_cart é estável.
  botaoCarrinho: '#header a[href="/view_cart"]',
  // Nível 3: não há data-qa. data-product-id="1" é o id de catálogo do Blue Top.
  // O bloco productinfo distingue o botão visível do duplicado no overlay.
  botaoAdicionarProduto: 'div.features_items div.productinfo a[data-product-id="1"]',
  // Nível 3: o diálogo "Added!" não tem data-qa. O id cartModal é estável.
  modalAdicionado: '#cartModal',
  // Nível 3: o botão "Continue Shopping" não tem data-qa. O id do diálogo aponta para o alvo.
  botaoFecharAdicionado: '#cartModal .close-modal',
  // Nível 3: o rodapé não tem data-qa. O id footer é estável.
  rodape: '#footer',
  // Nível 5: o título é o contrato do caso. O h2 não tem data-qa. O HTML diz "Subscription".
  tituloSubscricao: 'Subscription',
  // Nível 3: não há data-qa. O id está escrito assim no site (susbscribe).
  campoSubscricao: '#susbscribe_email',
  // Nível 3: o botão da seta não tem data-qa. O id subscribe é estável.
  botaoSubscricao: '#subscribe',
  // Nível 3: a confirmação não tem data-qa. O id success-subscribe é estável.
  mensagemSubscricao: '#success-subscribe',
  // Nível 5: a frase é o contrato do caso. Está no DOM mesmo escondida; a page exige que fique visível.
  textoSubscricao: 'You have been successfully subscribed!',
}

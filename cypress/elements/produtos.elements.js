// Canal WEB, Cypress. Mapa da tela Products (Automation Exercise).
// Só seletores. As ações vivem em pages/produtos.page.js.

export const produtosElements = {
  // Nível 5: o título é o contrato do caso. O h2 não tem data-qa. O HTML diz "All Products".
  tituloTodosOsProdutos: 'All Products',
  // Nível 4: o campo de pesquisa não tem data-qa. O name search é o do formulário.
  campoPesquisa: 'input[name="search"]',
  // Nível 3: o botão de pesquisa não tem data-qa. O id submit_search é estável.
  botaoPesquisar: '#submit_search',
  // Nível 5: o título é o contrato do caso. O h2 não tem data-qa. O HTML diz "Searched Products".
  tituloPesquisados: 'Searched Products',
  // Nível 5: o nome do produto é o contrato visível. Não há data-qa no cartão.
  // O p direto de productinfo é o nome; o overlay fica de fora.
  nomeProduto: 'div.features_items div.productinfo > p',
}

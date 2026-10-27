// Canal WEB, Cypress. Mapa de comparação do login: CSS tradicional e o mesmo alvo em XPath.
// Só seletores. As ações vivem em loginComparacao.page.js, nesta pasta.
// As chaves são as mesmas nos dois objetos. XPath absoluto não entra no mapa.

// CSS tradicional. O name="email" também existe no Signup, por isso o form action="/login" limita o alvo.
export const loginCssElements = {
  // Nível 5: o título é o contrato do caso. O h2 não tem id.
  tituloLogin: 'Login to your account',
  // Nível 4: name do campo, dentro do form de login.
  campoEmail: 'form[action="/login"] input[name="email"]',
  // Nível 4: name do campo, dentro do form de login.
  campoSenha: 'form[action="/login"] input[name="password"]',
  // type="submit" sozinho também pega o Signup e a assinatura. O form de login deixa o alvo único.
  botaoLogin: 'form[action="/login"] button[type="submit"]',
}

// O mesmo alvo, em XPath relativo. Os atributos são os do objeto CSS.
export const loginXpathComparacaoElements = {
  tituloLogin: 'Login to your account',
  // Nível 4 via XPath: name="email" no form action="/login".
  campoEmail: '//form[@action="/login"]//input[@name="email"]',
  // Nível 4 via XPath: name="password" no form action="/login".
  campoSenha: '//form[@action="/login"]//input[@name="password"]',
  // XPath relativo do botão Login. Não usa /html/body/...
  botaoLogin: '//form[@action="/login"]//button[@type="submit"]',
}

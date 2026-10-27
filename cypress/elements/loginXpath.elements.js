// Canal WEB, Cypress. Mapa XPath da seção Login to your account.
// Só seletores. As ações vivem em pages/loginXpath.page.js.
// XPath relativo, ancorado no data-qa. XPath absoluto não entra no mapa.

export const loginXpathElements = {
  // Nível 5: o título é o contrato do caso. O h2 não tem data-qa.
  tituloLogin: 'Login to your account',
  // Nível 1 via XPath: data-qa do e-mail de login. Não há data-cy nem id.
  campoEmail: '//input[@data-qa="login-email"]',
  // Nível 1 via XPath: data-qa da senha. O campo não tem id="password".
  campoSenha: '//input[@data-qa="login-password"]',
  // Nível 1 via XPath: data-qa do botão Login.
  // button[type="submit"] sozinho também pega o Signup e o botão de assinatura.
  botaoLogin: '//button[@data-qa="login-button"]',
}

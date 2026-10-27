// Canal WEB, Cypress. Mapa da seção Login to your account, na tela Signup / Login.
// Só seletores. As ações vivem em pages/login.page.js.

export const loginElements = {
  // Nível 5: o título é o contrato do caso. O h2 não tem data-qa.
  tituloLogin: 'Login to your account',
  // Nível 1: data-qa do e-mail de login. Distinto do e-mail de inscrição.
  campoEmail: '[data-qa=login-email]',
  // Nível 1: data-qa da senha de login.
  campoSenha: '[data-qa=login-password]',
  // Nível 1: data-qa do botão Login.
  botaoLogin: '[data-qa=login-button]',
  // Nível 5: a frase é o contrato do caso. O parágrafo do erro não tem data-qa.
  mensagemCredenciaisInvalidas: 'Your email or password is incorrect!',
}

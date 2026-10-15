// Canal WEB, Cypress. Mapa do ecrã Signup / Login, secção de novo utilizador.
// Só seletores. As ações vivem em pages/inscricao.page.js.

export const inscricaoElements = {
  // Nível 5: o título é o contrato do caso. O h2 não tem data-qa.
  tituloNovoUtilizador: 'New User Signup!',
  // Nível 1: o site publica data-qa (não há data-cy) no nome do novo utilizador.
  campoNome: '[data-qa=signup-name]',
  // Nível 1: data-qa do e-mail de inscrição. Distinto do e-mail de login.
  campoEmail: '[data-qa=signup-email]',
  // Nível 1: data-qa do botão Signup.
  botaoSignup: '[data-qa=signup-button]',
  // Nível 5: a frase é o contrato do caso. O parágrafo do erro não tem data-qa.
  mensagemEmailExistente: 'Email Address already exist!',
}

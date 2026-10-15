// Canal WEB, Cypress. Mapa do ecrã de login.
// Só seletores. As ações vivem em pages/login.page.js.

export const loginElements = {
  // Nível 1: data-cy estável, contrato de automação do campo de e-mail.
  campoEmail: '[data-cy=email]',
  // Nível 1: data-cy estável, contrato de automação do campo de senha.
  campoSenha: '[data-cy=senha]',
  // Nível 1: data-cy estável. O texto do botão pode mudar de idioma.
  botaoEntrar: '[data-cy=entrar]',
}

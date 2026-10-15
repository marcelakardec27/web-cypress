// Canal WEB, Cypress. Mapa do ecrã inicial (Automation Exercise).
// Só seletores. As ações vivem em pages/home.page.js.

export const homeElements = {
  // Nível 2: não há data-cy nem data-qa. A imagem tem nome acessível estável no alt.
  logotipo: 'img[alt="Website for automation practice"]',
  // Nível 2: link com nome "Signup / Login". O href /login ancora o mesmo alvo.
  botaoSignupLogin: 'a[href="/login"]',
  // Nível 3: o link "Logged in as" não tem data-qa. O id #header não é gerado em runtime.
  indicadorSessao: '#header',
  // Nível 2: link com nome "Delete Account". O href /delete_account é estável.
  botaoEliminarConta: 'a[href="/delete_account"]',
  // Nível 2: link com nome "Logout". Não há data-qa. O href /logout é estável.
  botaoLogout: 'a[href="/logout"]',
}

// Canal WEB, Cypress. Cenário do Caso de Teste 10 - Verificar Subscrição na Página Inicial.
// Os comentários numerados seguem a descrição oficial. Não há seletor.
// O e-mail só serve para o formulário do rodapé; o site confirma no navegador.

import { homePage } from '../../pages/home.page'

// Anúncios de terceiros disparam erros que não fazem parte deste fluxo.
Cypress.on('uncaught:exception', (err) => {
  const mensagem = `${err.message} ${err.stack || ''}`
  if (/google|gstatic|adsbygoogle|doubleclick|Script error/i.test(mensagem)) {
    return false
  }
})

describe('subscrever na página inicial', () => {
  it('deve confirmar a subscrição no rodapé', () => {
    const email = `qax.sub.${Date.now()}@example.com`

    // 1. O Cypress abre o navegador.
    // 2. Acessa http://automationexercise.com
    homePage.visitar()
    // 3. Verifica que a página inicial está visível
    homePage.verPaginaInicial()
    // 4. Desce até o rodapé
    homePage.descerAoRodape()
    // 5. Verifica o texto SUBSCRIPTION
    homePage.verTextoSubscricao()
    // 6. Digita o e-mail e clica na seta
    homePage.subscrever(email)
    // 7. Verifica You have been successfully subscribed!
    homePage.verSubscricaoConfirmada()
  })
})

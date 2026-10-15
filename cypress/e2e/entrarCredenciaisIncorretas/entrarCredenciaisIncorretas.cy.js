// Canal WEB, Cypress. Cenário do Test Case 3: Login User with incorrect email and password.
// Não contém seletor. O e-mail não existe; a senha também está errada.

import { homePage } from '../../pages/home.page'
import { loginPage } from '../../pages/login.page'

// Anúncios de terceiros disparam erros que não fazem parte deste fluxo.
Cypress.on('uncaught:exception', (err) => {
  const mensagem = `${err.message} ${err.stack || ''}`
  if (/google|gstatic|adsbygoogle|doubleclick|Script error/i.test(mensagem)) {
    return false
  }
})

describe('entrar com credenciais incorretas', () => {
  it('deve mostrar o erro quando o e-mail e a senha estão errados', () => {
    const email = `qax.invalido.${Date.now()}@example.com`
    const senha = 'SenhaIncorreta123'

    homePage.visitar()
    homePage.verPaginaInicial()
    homePage.irParaInscricao()

    loginPage.verLogin()
    loginPage.entrar(email, senha)
    loginPage.verCredenciaisInvalidas()
  })
})

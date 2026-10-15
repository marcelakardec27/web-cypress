// Canal WEB, Cypress. Mapa do ecrã Enter Account Information.
// Só seletores. As ações vivem em pages/conta.page.js.

export const contaElements = {
  // Nível 5: o título é o contrato do caso. O h2 não tem data-qa.
  tituloInformacao: 'Enter Account Information',
  // Nível 3: o rádio Mr não tem data-qa. O id id_gender1 não é gerado em runtime.
  tituloMr: '#id_gender1',
  // Nível 1: data-qa do nome, já preenchido a partir da inscrição.
  campoNome: '[data-qa=name]',
  // Nível 1: data-qa do e-mail. O campo chega desativado, com o valor da inscrição.
  campoEmail: '[data-qa=email]',
  // Nível 1: data-qa da senha.
  campoSenha: '[data-qa=password]',
  // Nível 1: data-qa do dia de nascimento.
  diaNascimento: '[data-qa=days]',
  // Nível 1: data-qa do mês de nascimento.
  mesNascimento: '[data-qa=months]',
  // Nível 1: data-qa do ano de nascimento.
  anoNascimento: '[data-qa=years]',
  // Nível 3: a checkbox da newsletter não tem data-qa. O id newsletter é estável.
  opcaoNewsletter: '#newsletter',
  // Nível 3: a checkbox de ofertas não tem data-qa. O id optin é estável.
  opcaoOfertas: '#optin',
  // Nível 1: data-qa do primeiro nome.
  campoPrimeiroNome: '[data-qa=first_name]',
  // Nível 1: data-qa do apelido.
  campoApelido: '[data-qa=last_name]',
  // Nível 1: data-qa da empresa.
  campoEmpresa: '[data-qa=company]',
  // Nível 1: data-qa da morada (o name do campo é address1).
  campoMorada: '[data-qa=address]',
  // Nível 1: data-qa da segunda linha da morada.
  campoMorada2: '[data-qa=address2]',
  // Nível 1: data-qa do país.
  campoPais: '[data-qa=country]',
  // Nível 1: data-qa do estado.
  campoEstado: '[data-qa=state]',
  // Nível 1: data-qa da cidade.
  campoCidade: '[data-qa=city]',
  // Nível 1: data-qa do código postal.
  campoCodigoPostal: '[data-qa=zipcode]',
  // Nível 1: data-qa do telemóvel.
  campoTelemovel: '[data-qa=mobile_number]',
  // Nível 1: data-qa do botão Create Account.
  botaoCriarConta: '[data-qa=create-account]',
}

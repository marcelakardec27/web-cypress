// Canal WEB, Cypress. Grava o relatório da última execução de cypress run.
// O arquivo relatorio.md na raiz do projeto é substituído no fim de cada execução.

const fs = require('fs')
const path = require('path')

function duracao(ms) {
  const total = Math.round(Number(ms) || 0)
  const segundos = Math.round(total / 1000)
  const minutos = Math.floor(segundos / 60)
  const resto = segundos % 60
  if (minutos === 0) return `${resto}s`
  return `${minutos} min ${resto}s`
}

function quando(iso) {
  const data = iso ? new Date(iso) : new Date()
  return data.toLocaleString('pt-BR')
}

function escapar(texto) {
  return String(texto || '').replace(/\|/g, '\\|').replace(/\r?\n/g, ' ')
}

function escreverRelatorio(results, raiz) {
  const destino = path.join(raiz, 'relatorio.md')
  const corridas = Array.isArray(results && results.runs) ? results.runs : []
  const falhas = []

  const linhas = [
    '# Relatório de testes',
    '',
    `Atualizado em ${quando(results && results.endedTestsAt)}. Este arquivo é substituído no fim de cada \`cypress run\`.`,
    '',
    '## Resumo',
    '',
    '| | |',
    '|---|---|',
    `| Cypress | ${escapar(results && results.cypressVersion)} |`,
    `| Navegador | ${escapar(results && results.browserName)} ${escapar(results && results.browserVersion)} |`,
    `| Sistema | ${escapar(results && results.osName)} ${escapar(results && results.osVersion)} |`,
    `| Início | ${quando(results && results.startedTestsAt)} |`,
    `| Fim | ${quando(results && results.endedTestsAt)} |`,
    `| Duração | ${duracao(results && results.totalDuration)} |`,
    `| Specs | ${corridas.length} |`,
    `| Testes | ${results ? results.totalTests : 0} |`,
    `| Passou | ${results ? results.totalPassed : 0} |`,
    `| Falhou | ${results ? results.totalFailed : 0} |`,
    `| Pendente | ${results ? results.totalPending : 0} |`,
    `| Ignorado | ${results ? results.totalSkipped : 0} |`,
    '',
    '## Specs',
    '',
    '| Spec | Testes | Passou | Falhou | Duração | Resultado |',
    '|---|---:|---:|---:|---:|---|',
  ]

  corridas.forEach((corrida) => {
    const stats = corrida.stats || {}
    const nome = corrida.spec && (corrida.spec.relative || corrida.spec.name)
    const resultado = stats.failures > 0 ? 'falhou' : 'passou'
    linhas.push(
      `| ${escapar(nome)} | ${stats.tests || 0} | ${stats.passes || 0} | ${stats.failures || 0} | ${duracao(stats.duration)} | ${resultado} |`
    )
    ;(corrida.tests || []).forEach((teste) => {
      if (teste.state === 'failed') {
        const titulo = Array.isArray(teste.title) ? teste.title.join(' > ') : teste.title
        falhas.push({ spec: nome, titulo, erro: teste.displayError })
      }
    })
  })

  linhas.push('', '## Cenários', '')

  if (corridas.length === 0) {
    linhas.push('Nenhum spec chegou a rodar.')
  }

  corridas.forEach((corrida) => {
    const nome = corrida.spec && (corrida.spec.relative || corrida.spec.name)
    linhas.push(`### ${nome}`, '')
    ;(corrida.tests || []).forEach((teste) => {
      const titulo = Array.isArray(teste.title) ? teste.title[teste.title.length - 1] : teste.title
      const estado = teste.state === 'passed' ? 'passou' : teste.state === 'failed' ? 'falhou' : teste.state
      linhas.push(`- ${estado}: ${titulo} (${duracao(teste.duration)})`)
    })
    linhas.push('')
  })

  if (falhas.length > 0) {
    linhas.push('## Falhas', '')
    falhas.forEach((falha) => {
      linhas.push(`### ${falha.spec}`, '', falha.titulo, '', '```', falha.erro || 'Sem detalhe do erro.', '```', '')
    })
  }

  fs.writeFileSync(destino, `${linhas.join('\n')}\n`, 'utf8')
  console.log(`Relatório atualizado em ${destino}`)
}

module.exports = { escreverRelatorio }

const { defineConfig } = require("cypress");
const { escreverRelatorio } = require("./cypress/support/escreverRelatorio");
const { prepararFirefox } = require("./cypress/support/firefoxCompativel");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // No fim de cypress run, substitui relatorio.md na raiz com o resultado desta execução.
      on("after:run", (results) => {
        escreverRelatorio(results, config.projectRoot);
      });
      // O nome firefox passa a abrir o Firefox 128, compatível com este Cypress.
      return prepararFirefox(config);
    },
  },
});

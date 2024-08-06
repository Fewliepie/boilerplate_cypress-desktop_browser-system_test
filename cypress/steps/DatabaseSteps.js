import { Given } from '@badeball/cypress-cucumber-preprocessor'

Given('que consulto a tabela {string} da base de dados {string}', (tableName, database) => {
  const dbConfig = Cypress.env('DB')[database]
  const sql =
    `
      SELECT TOP 1 * FROM ${tableName};
    `

  cy.task('mssqlExecuteQuery', { dbConfig, sql })
})

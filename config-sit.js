const { defineConfig } = require('cypress')
const baseConfig = require('./cypress.config.js')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({ path: path.resolve(__dirname, './.env.sit') })

const e2e = {
  ...baseConfig.e2e,
  baseUrl: 'https://www.google.com.br/',
  env: {
    DB: {
      credz_prod: {
        tipo: process.env.DB_SQL_TIPO,
        server: process.env.DB_SQL_SERVER,
        user: process.env.DB_SQL_USER,
        port: +process.env.DB_SQL_PORT,
        password: process.env.DB_SQL_PASSWORD,
        database: 'credz_prod',
        options: {
          encrypt: true,
          trustServerCertificate: true,
          rowCollectionOnRequestCompletion: true
        }
      }
    }
  }
}

module.exports = defineConfig({
  ...baseConfig,
  e2e
})

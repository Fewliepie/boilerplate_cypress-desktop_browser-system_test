const pg = require('pg')
const mssql = require('mssql')

module.exports = async function registerDatabaseTasks(on) {
  on('task', {
    async mssqlExecuteQuery({ dbConfig, query, params = {} }) {
      let pool
      try {
        pool = await mssql.connect(dbConfig)
        const request = new mssql.Request(pool)

        for (const [name, value] of Object.entries(params)) {
          request.input(name, value)
        }

        return await request.query(query)
      } catch (error) {
        console.log('Error on MSSQL DB Query: ', error.message)
        throw new Error(error.message)
      } finally {
        if (pool) await pool.close()
      }
    },

    async pgExecuteQuery({ dbConfig, query, params }) {
      const pool = new pg.Pool(dbConfig)
      try {
        const result = await pool.query(query, [...params])
        await pool.end()
        return result
      } catch (error) {
        console.log('Error on Postgress DB Query: ', error.message)
        throw new Error(error.message)
      }
    }
  })
}

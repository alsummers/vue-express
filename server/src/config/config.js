module.exports = {
  port: 8081,
  db: {
    database: process.env.DB_NAME || 'vueExpress',
    user: process.env.DB_USER || 'vueExpress',
    password: process.env.DB_PASS || 'vueExpress',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './vueExpress.sqlite'
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secretstring123'
  }
}

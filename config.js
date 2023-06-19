export default  sqlConfig= {
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  server: process.env.SERVER,
  authentication: {
      type: 'default'
  },
  options: {
      encrypt: true
  }
}

// module.exports = sqlConfig
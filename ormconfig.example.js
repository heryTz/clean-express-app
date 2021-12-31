require('dotenv').config()

const rootDir = process.env.NODE_ENV === 'dev' ? 'src' : 'build'

module.exports = {
   type: 'mysql',
   host: process.env.DB_HOST,
   port: process.env.DB_PORT,
   username: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME,
   synchronize: true,
   logging: process.env.ENABLE_DB_lOGING,
   entities: [
      `${rootDir}/Entity/**/*.{js,ts}`
   ],
   migrations: [
      `${rootDir}/Migration/**/*.{js,ts}`
   ],
   subscribers: [
      `${rootDir}/Subscriber/**/*.{js,ts}`
   ],
   cli: {
      "entitiesDir": `${rootDir}/Entity`,
      "migrationsDir": `${rootDir}/MigrationMysql`,
      "subscribersDir": `${rootDir}/Subscriber`
   }
}
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import db from './db/index.js' 
import routes from './routes/index.js'

run() 

async function run() {
  const app = express()

  app.use(cors())
  app.use(bodyParser.json())

  await db.run()

  routes.register(app)

  app.listen(3000, function(err) {
    if (!err) {
      console.log(`Server started by port 3000`)
    }
  })
}

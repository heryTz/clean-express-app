import 'reflect-metadata'
import dotenv from 'dotenv'
import { createConnection } from 'typeorm'
import express from 'express'
import cors from 'cors'

dotenv.config()

createConnection()
    .then(() => {
        const app = express()
        app.use(cors())
        app.use(express.json({ limit: '50mb' }))
        app.use(express.urlencoded({ extended: true }))

        const port = process.env.PORT || '3030'
        app.set('port', port)
        app.set('env', process.env.NODE_ENV || 'prod')
    })
    .catch(error => {
        console.log(error)
    })
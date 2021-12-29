import 'reflect-metadata'
import dotenv from 'dotenv'
import { createConnection } from 'typeorm'
import express from 'express'
import cors from 'cors'
import { setupServer } from './tools/server'

dotenv.config()

createConnection()
    .then(() => {
        const app = express()
        app.use(cors())
        app.use(express.json({ limit: '50mb' }))
        app.use(express.urlencoded({ extended: true }))

        setupServer(app)
    })
    .catch(console.log)

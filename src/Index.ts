import 'reflect-metadata'
import dotenv from 'dotenv'
import { createConnection } from 'typeorm'
import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { setupServer } from './tools/Server'
import { InversifyExpressServer } from 'inversify-express-utils'
import container from './Provider'
import './controller/Index'

dotenv.config()

createConnection()
    .then(() => {
        const server = new InversifyExpressServer(container)

        server.setConfig((app: Application) => {
            app.use(cors())
            app.use(express.json({ limit: '50mb' }))
            app.use(express.urlencoded({ extended: true }))
        })

        const app = server.build()

        app.use((req: Request, res: Response) => {
            return res.status(404).send('404 NOT FOUND')
        })

        setupServer(app)
    })
    .catch(console.log)

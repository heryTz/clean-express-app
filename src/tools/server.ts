import { Application } from 'express'

export function setupServer(app: Application) {
    const port = process.env.NODE_PORT || '3030'
    app.set('port', port)
    app.set('env', process.env.NODE_ENV || 'prod')

    const server = app.listen()
    server.on('listening', onListening)
    server.on('error', onError)

    process.on('SIGINT', () => {
        server.close(() => {
            process.exit(0)
        })
    })

    process.on('SIGTERM', () => {
        server.close(() => {
            process.exit(0)
        })
    })
}

function onListening() {
    console.log(`Listening ${process.env.NODE_PORT}`)
}

// Extracted from express generator code
function onError(error: any) {
    if (error.syscall !== 'listen') {
        throw error
    }

    const port = process.env.NODE_PORT
    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port

    switch (error.code) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`)
            process.exit(1)
            break
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`)
            process.exit(1)
            break
        default:
            throw error
    }
}

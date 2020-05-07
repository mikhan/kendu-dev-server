import { spawn } from 'child_process'
import { getPort } from './getPort'

export class Server {
    constructor(public baseDir: string) { }

    async listen(portrange: number) {
        const startTime = new Date()
        const baseDir = this.baseDir
        const port = await getPort(portrange)

        const process = spawn('php', ['-S', `localhost:${port}`, '-t', baseDir])
        process.on('error', (event) => console.error(`Error: ${event.message}`))
        process.stdout.on('data', (data) => (console.error(`stdout: ${data}`)))

        console.info(`Development Server started at ${startTime.toString()}`)
        console.info(`Serving files from ${baseDir}`)
        console.info(`Listening on http://localhost:${port}`)
    }
}

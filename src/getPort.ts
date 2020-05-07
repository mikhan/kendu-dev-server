import { createServer } from 'net'

export const getPort = async (portrange: number): Promise<number> =>
    new Promise((resolve) => {
        const testNext = () => {
            const port = portrange
            portrange += 1

            const server = createServer()
            server.listen(port, () => {
                server.once('close', () => (resolve(port)))
                server.close()
            })
            server.on('error', () => testNext())
        }

        testNext()
    })
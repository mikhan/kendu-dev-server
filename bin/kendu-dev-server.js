#!/usr/bin/env node

const path = require('path')
const { Server } = require('../lib/server')

process.exitCode = 0

try {
    if (!process.argv[2]) throw new TypeError('Please specify the public folder')

    const baseDir = path.resolve(process.argv[2])
    const server = new Server(baseDir)
    server.listen(8000)
} catch (error) {
    console.error(error.message)
    process.exitCode = 1
}

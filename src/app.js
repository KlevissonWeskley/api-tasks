import express from 'express'
import { connectDb } from './config/db.js'
import { routes } from './routes/index.js'

const connection = await connectDb()

connection.on('error', (erro) => {
    console.log(`${erro} - Falha ao conectar com o banco`)
})

connection.once('open', () => {
    console.log('Conexão com o banco feita com sucesso!')
})

export const app = express()
routes(app)
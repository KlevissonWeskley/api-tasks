import express from 'express'
import tasks from './tasks-routes.js'

export const routes = (app) => {
    app.route('/').get((req, res) => res.status(200).send('API de tarefas'))
    app.use(express.json(), tasks)
}
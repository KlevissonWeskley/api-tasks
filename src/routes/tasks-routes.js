import express from 'express'
import { TaskController } from '../controllers/tasks-controller.js'

const routes = express.Router()

routes.get('/tasks', TaskController.listTasks)
routes.get('/tasks/:id', TaskController.listTaskById)
routes.post('/tasks', TaskController.createTask)
routes.put('/tasks/:id', TaskController.updateTask)
routes.delete('/tasks/:id', TaskController.deleteTask)

export default routes
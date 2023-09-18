import { tasks } from '../models/Task.js'

export class TaskController {
    static async listTasks (req, res) {
        try {
            const listTasks = await tasks.find({})
            res.status(200).json(listTasks)
        } catch (err) {
            res.status(500).json({ message: `${err.message} - Falha na requisição` })
        }
    }

    static async listTaskById (req, res) {
        try {
            const id = req.params.id
            const task = await tasks.findById(id)
    
            res.status(200).json(task)
        } catch (err) {
            res.status(404).json({ message: `${err.message} - Falha ao encontrar a tarefa` })
        }
    }

    static async createTask (req, res) {
        const newTask = req.body
        try {
            const createdTask = await tasks.create(newTask)
            res.status(201).json({ message: 'Tarefa criada com sucesso', tarefa: createdTask })
        } catch (err) {
            res.status(500).json({ message: `${err.message} - Falha ao criar tarefa` })
        }
    }

    static async updateTask (req, res) {
        try {
            const id = req.params.id
            await tasks.findByIdAndUpdate(id, req.body)
            res.status(200).json({ message: 'Tarefa atualizada' })
        } catch (err) {
            res.status(500).json({ message: `${err.message} - Falha ao atualizar a tarefa` })
        }
    }

    static async deleteTask (req, res) {
        try {
            const id = req.params.id
            await tasks.findByIdAndDelete(id)
            res.status(200).json({ message: 'Tarefa deletada' }) 
        } catch (err) {
            res.status(500).json({ message: `${err.message} - Falha ao deletar a tarefa` })
        }
    }
}
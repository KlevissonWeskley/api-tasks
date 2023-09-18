import mongoose from 'mongoose'

const taskSchema = mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
    description: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    completed_at: { type: Boolean, required: true }
}, {versionKey: false})

export const tasks = mongoose.model('tasks', taskSchema)


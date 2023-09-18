import mongoose from 'mongoose'
import 'dotenv/config'

export async function connectDb() {
    mongoose.connect(process.env.DB_CONNECTION)

    return mongoose.connection
}
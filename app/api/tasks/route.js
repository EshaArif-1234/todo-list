import connectToDatabase from '@/lib/mongodb'
import mongoose from 'mongoose'

const TaskSchema = new mongoose.Schema({
  text: String,
})

const Task = mongoose.models.Task || mongoose.model('Task', TaskSchema)

export async function POST(req) {
  try {
    const { text } = await req.json()
    
    // Log the received data
    console.log('Received text:', text)

    await connectToDatabase()

    const newTask = await Task.create({ text })
    
    // Log the new task created
    console.log('New Task:', newTask)
    
    return new Response(JSON.stringify(newTask), { status: 201 })
  } catch (error) {
    console.error('Error in POST /api/tasks:', error)
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 })
  }
}


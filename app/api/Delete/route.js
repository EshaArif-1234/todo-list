import connectToDatabase from '@/lib/mongodb'
import mongoose from 'mongoose'

const TaskSchema = new mongoose.Schema({
  text: String,
})

const Task = mongoose.models.Task || mongoose.model('Task', TaskSchema)


export async function DELETE(req) {
  try {
    const { id } = await req.json()
    await connectToDatabase()
    const deleted = await Task.findByIdAndDelete(id)
    if (!deleted) {
      return new Response(JSON.stringify({ error: 'Task not found' }), { status: 404 })
    }
    return new Response(JSON.stringify({ message: 'Task deleted' }), { status: 200 })
  } catch (error) {
    console.error('Error in DELETE /api/tasks:', error)
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 })
  }
}
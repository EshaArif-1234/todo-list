import connectToDatabase from '@/lib/mongodb'
import mongoose from 'mongoose'

const TaskSchema = new mongoose.Schema({
  text: String,
})

const Task = mongoose.models.Task || mongoose.model('Task', TaskSchema)
export async function GET() {
    try {
      await connectToDatabase();
      const tasks = await Task.find();
      return new Response(JSON.stringify(tasks), { status: 200 });
    } catch (error) {
      console.error('Error in GET /api/tasks:', error);
      return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
  }
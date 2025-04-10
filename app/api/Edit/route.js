// app/api/tasks/route.js
import connectToDatabase from '@/lib/mongodb';
import mongoose from 'mongoose';

// Define the Task schema and model
const TaskSchema = new mongoose.Schema({
  text: String,
});

const Task = mongoose.models.Task || mongoose.model('Task', TaskSchema);

// PATCH: Edit a task
export async function PATCH(req) {
  try {
    const { id, text } = await req.json();

    await connectToDatabase();

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { text },
      { new: true }
    );

    if (!updatedTask) {
      return new Response(JSON.stringify({ error: 'Task not found' }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(updatedTask), { status: 200 });
  } catch (error) {
    console.error('❌ PATCH Error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
    });
  }
}

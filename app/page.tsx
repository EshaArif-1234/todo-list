// app/page.tsx
'use client'

import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TaskForm from '@/components/TaskForm'
import TaskList from '@/components/TaskList'

export default function HomePage() {
  const [tasks, setTasks] = useState<{ id: string; text: string }[]>([])

  const addTask = (text: string) => {
    setTasks([...tasks, { id: uuidv4(), text }])
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id))
  }
  const editTask = (id, updatedTask) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, ...updatedTask } : task
      )
    );
  };
  

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">My To-Do List</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onEdit={editTask} />
      </main>
  )
}

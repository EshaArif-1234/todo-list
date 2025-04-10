'use client';

import { useEffect, useState } from 'react';
import TaskForm from '@/components/TaskForm';
import TaskList from '@/components/TaskList';

export default function HomePage() {
  const [tasks, setTasks] = useState<{ _id: string; text: string }[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch('/api/Get');
      const data = await res.json();
      setTasks(data); // populate tasks from MongoDB
    };
  
    fetchTasks();
  }, []);
  
  const addTask = async (text: string) => {
    const res = await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });

    const newTask = await res.json();
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task._id !== id))
  }
  

  const editTask = (id: string, updatedTask: { text: string }) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task._id === id ? { ...task, ...updatedTask } : task
      )
    );
  };

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">My To-Do List</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onEdit={editTask} />
    </main>
  );
}

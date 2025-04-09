'use client'

import { useState } from 'react'

export default function TaskForm({ onAdd }) {
    const [text, setText] = useState('')
  
    const handleSubmit = (e) => {
      e.preventDefault()
      if (!text.trim()) return
      onAdd(text)
      setText('')
    }
  
    return (
      <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a task"
          className="flex-1 p-2 rounded border dark:border-gray-600 bg-white dark:bg-zinc-800 text-black dark:text-white"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add
        </button>
      </form>
    )
  }
  

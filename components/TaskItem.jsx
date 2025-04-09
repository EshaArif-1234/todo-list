import { useState } from 'react'
import { Trash2, Edit2, Check, X } from 'lucide-react'

export default function TaskItem({ task, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false)
  const [newText, setNewText] = useState(task.text)

  const handleEdit = () => {
    onEdit(task.id, { text: newText })
    setIsEditing(false)
  }

  return (
    <div className="flex flex-row justify-between items-center bg-gray-100 dark:bg-zinc-800 p-3 rounded">
      <div>
        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="px-2 py-1 rounded  text-[white] bg-transparent outline-none"
          />
        ) : (
          <span>{task.text}</span>
        )}
      </div>

      <div className="flex items-center gap-2">
        {isEditing ? (
          <>
            <button onClick={handleEdit} className="text-green-500 hover:text-green-700">
              <Check size={20} />
            </button>
            <button onClick={() => setIsEditing(false)} className="text-gray-500 hover:text-gray-700">
              <X size={20} />
            </button>
          </>
        ) : (
          <button onClick={() => setIsEditing(true)} className="text-yellow-500 hover:text-yellow-700">
            <Edit2 size={20} />
          </button>
        )}
        <button onClick={() => onDelete(task.id)} className="text-red-500 hover:text-red-700">
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  )
}

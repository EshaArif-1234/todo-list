import TaskItem from './TaskItem'
import { motion, AnimatePresence } from 'framer-motion'

export default function TaskList({ tasks, onDelete , onEdit}) {
  return (
    <ul className="space-y-2">
      <AnimatePresence>
        {tasks.map(task => (
          <motion.li
            key={task.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <TaskItem task={task} onDelete={onDelete}  onEdit={onEdit} />

          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  )
}

import { Trash2, GripVertical, Check } from "lucide-react";
import { useTaskContext } from "@/context/TaskContext";
import type { Task } from "@/types/task";
import type { DraggableProvided } from "@hello-pangea/dnd";
import { useState } from "react";

export default function TaskItem({
  task,
  provided,
}: {
  task: Task;
  provided: DraggableProvided;
}) {
  const { toggleTask, deleteTask } = useTaskContext();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);

    setTimeout(() => {
      deleteTask(task.id);
    }, 300);
  };

  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      style={{ ...provided.draggableProps.style }}
      className={`group flex items-center gap-3 p-4 bg-card border border-border rounded-lg mb-2 
        ${task.completed ? "opacity-70" : ""} ${isDeleting ? "animate-task-exit" : "animate-task-enter"}`}
    >
      <div
        {...provided.dragHandleProps}
        className="text-muted-foreground cursor-grab active:cursor-grabbing p-1 hover:bg-muted rounded"
      >
        <GripVertical size={16} />
      </div>

      <button
        onClick={() => toggleTask(task.id)}
        className={`shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors
          ${
            task.completed ? "bg-green-500 border-green-500" : "border-border"
          }`}
      >
        {task.completed && <Check size={14} className="text-white" />}
      </button>

      <span
        className={`flex-1 ${
          task.completed ? "line-through text-muted-foreground" : ""
        }`}
      >
        {task.title}
      </span>

      <button
        onClick={handleDelete}
        className="p-2 text-muted-foreground opacity-0 group-hover:opacity-100 hover:text-red-500 transition-opacity"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
}

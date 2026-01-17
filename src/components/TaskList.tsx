import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useTaskContext } from "@/context/TaskContext";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const { filteredTasks, reorderTasks } = useTaskContext();

  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    reorderTasks(result.source.index, result.destination.index);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="tasks-list">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="space-y-3 min-h-25"
          >
            {filteredTasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => <TaskItem task={task} provided={provided} />}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

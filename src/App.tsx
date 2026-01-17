import { CheckCircle2 } from "lucide-react";
import { ModeToggle } from "./components/mode-toggle";
import TaskInput from "./components/TaskInput";
import TaskFilter from "./components/TaskFilter";
import TaskStats from "./components/TaskStats";
import TaskList from "./components/TaskList";

const TaskManager = () => {
  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:py-12 sm:px-6">
      <div className="max-w-xl mx-auto space-y-6">
        {/* Header */}
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-primary/10 rounded-xl">
              <CheckCircle2 className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
                Tasks
              </h1>
              <p className="text-sm text-muted-foreground">
                Stay organized, stay productive
              </p>
            </div>
          </div>

          <div className="scale-120 origin-right">
            <ModeToggle />
          </div>
        </header>

        {/* Task Input */}
        <TaskInput />

        {/* Filter & Stats */}
        <div className="space-y-4">
          <TaskFilter />
          <TaskStats />
        </div>

        {/* Task List */}
        <TaskList />

      </div>
    </div>
  );
};

export default TaskManager;

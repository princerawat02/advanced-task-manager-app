import { useTaskContext } from '@/context/TaskContext';

export default function TaskStats() {
  const { stats } = useTaskContext();

  if (stats.total === 0) return null;

  const progress = Math.round((stats.completed / stats.total) * 100) || 0;
  const isComplete = progress === 100;

  return (
    <div className="p-4 bg-card border border-border rounded-lg shadow-sm animate-in fade-in slide-in-from-top-2 duration-500">
      <div className="flex justify-between mb-3 text-sm font-medium">
        <span className="flex items-center gap-2">
          Progress
          {isComplete && <span className="text-[10px] bg-primary/20 text-primary px-1.5 py-0.5 rounded animate-bounce">Done!</span>}
        </span>
        <span className="text-muted-foreground">
          {stats.completed} of {stats.total} completed
        </span>
      </div>
      
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-700 ease-out shadow-[0_0_10px_rgba(var(--primary),0.5)] ${
            isComplete ? "bg-green-500" : "bg-primary"
          }`}
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="mt-2 flex justify-between items-center">
        <p className="text-[10px] text-muted-foreground italic">
          {isComplete ? "All caught up!" : "Keep going!"}
        </p>
        <span className={`text-xs font-bold transition-colors ${isComplete ? "text-green-500" : "text-primary"}`}>
          {progress}%
        </span>
      </div>
    </div>
  );
}
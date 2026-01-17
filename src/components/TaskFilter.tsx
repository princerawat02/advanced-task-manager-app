import { useTaskContext } from "@/context/TaskContext";
import type { FilterType } from "@/types/task";

const filters: { value: FilterType; label: string }[] = [
  { value: "all", label: "All" },
  { value: "pending", label: "Pending" },
  { value: "completed", label: "Done" }, 
];

export default function TaskFilter() {
  const { filter, setFilter, stats } = useTaskContext();

  const counts = {
    all: stats.total,
    pending: stats.pending,
    completed: stats.completed,
  };

  return (
    <div className="flex gap-1 p-1 bg-muted/50 border border-border/50 rounded-xl">
      {filters.map(({ value, label }) => {
        const isActive = filter === value;

        return (
          <button
            key={value}
            onClick={() => setFilter(value)}
            className={`
              flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium rounded-lg 
              transition-all duration-200 active:scale-95
              ${
                isActive
                  ? "bg-background text-primary shadow-md ring-1 ring-black/5"
                  : "text-muted-foreground hover:bg-background/50 hover:text-foreground"
              }
            `}
          >
            {label}
            {counts[value] > 0 && (
              <span
                className={`
                min-w-5 h-5 flex items-center justify-center px-1 text-[10px] font-bold rounded-md transition-colors
                ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted-foreground/20 text-muted-foreground"
                }
              `}
              >
                {counts[value]}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

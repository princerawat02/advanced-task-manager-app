/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import type { Task, FilterType } from "@/types/task";

const TaskContext = createContext<any>(null);

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);
  const [filter, setFilter] = useLocalStorage<FilterType>("filter", "all");

  // Add task function
  const addTask = (title: string) => {
    const task = {
      id: crypto.randomUUID(),
      title: title.trim(),
      completed: false,
      createdAt: Date.now(),
    };
    setTasks([task, ...tasks]);
  };

  // Toggle task completion function
  const toggleTask = (id: string) =>
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );

  // Delete task function
  const deleteTask = (id: string) => setTasks(tasks.filter((t) => t.id !== id));

  // Reorder tasks function
  const reorderTasks = (startIndex: number, endIndex: number) => {
    const result = Array.from(tasks);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    setTasks(result);
  };

  // Compute statistics
  const completed = tasks.filter((t) => t.completed);
  const pending = tasks.filter((t) => !t.completed);

  const stats = {
    total: tasks.length,
    completed: completed.length,
    pending: pending.length,
  };

  const filteredTasks =
    filter === "completed" ? completed : filter === "pending" ? pending : tasks;

  return (
    <TaskContext.Provider
      value={{
        tasks,
        filter,
        filteredTasks,
        stats,
        addTask,
        toggleTask,
        deleteTask,
        setFilter,
        reorderTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

// Custom hook to use the TaskContext
export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context)
    throw new Error("useTaskContext must be used within a TaskProvider");
  return context;
};

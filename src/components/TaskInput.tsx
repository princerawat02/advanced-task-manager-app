import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useTaskContext } from '@/context/TaskContext';

export default function TaskInput() {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const { addTask } = useTaskContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = title.trim();

    if (!trimmed) {
      setError('Task cannot be empty');
      return;
    }
    if (trimmed.length < 5) {
      setError('At least 5 characters required');
      return;
    }

    addTask(trimmed);
    setTitle('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 group">
      <div className="relative flex items-center transition-all duration-300 ease-in-out">
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (error) setError('');
          }}
          placeholder="Add a new task..."
          className={`w-full px-5 py-4 pr-14 bg-card border rounded-xl outline-none transition-all duration-300
            ${error 
              ? 'border-red-400 focus:ring-4 focus:ring-red-500/10' 
              : 'border-border focus:border-primary focus:ring-4 focus:ring-primary/10'
            } 
            shadow-sm group-focus-within:shadow-md placeholder:text-muted-foreground/60`}
        />
        
        <button
          type="submit"
          disabled={!title.trim()}
          className={`absolute right-2 p-2.5 rounded-lg transition-all duration-300 
            flex items-center justify-center
            ${title.trim() 
              ? 'bg-primary text-primary-foreground shadow-lg hover:scale-105 active:scale-95' 
              : 'bg-muted text-muted-foreground cursor-not-allowed opacity-50'
            }`}
        >
          <Plus size={22} className={`transition-transform duration-300 ${title.trim() ? 'rotate-90' : 'rotate-0'}`} />
        </button>
      </div>

      <div className="overflow-hidden">
        <p className={`text-sm text-red-500 transition-all duration-300 ease-in-out
          ${error ? 'mt-2 translate-y-0 opacity-100' : '-translate-y-2 opacity-0 h-0'}`}
        >
          {error}
        </p>
      </div>
    </form>
  );
}
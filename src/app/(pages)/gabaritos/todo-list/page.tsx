"use client";

import { useState } from "react";
import { FaTrash } from "react-icons/fa";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  return (
    <div className="bg-white text-black flex flex-col items-center p-20 gap-20 min-h-screen font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-6xl font-bold text-[#F66C0E]">Lista de Tarefas</h1>
      <div className="flex flex-col items-center justify-center gap-8 w-full">
        <div className="flex flex-col gap-4">
          {todos.length != 0 ? (
            todos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between gap-10"
              >
                <input
                  type="checkbox"
                  className="w-5 h-5 text-[#F66C0E] cursor-pointer"
                  checked={todo.completed}
                  onChange={() => {
                    setTodos((prevTodos) =>
                      prevTodos.map((t) =>
                        t.id === todo.id ? { ...t, completed: !t.completed } : t
                      )
                    );
                  }}
                />
                <span
                  className={`text-lg ${
                    todo.completed ? "line-through text-green-500 italic" : ""
                  }`}
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => {
                    setTodos((prevTodos) =>
                      prevTodos.filter((t) => t.id !== todo.id)
                    );
                  }}
                  className="bg-red-500 hover:bg-red-700 text-white rounded p-2"
                >
                  <FaTrash />
                </button>
              </li>
            ))
          ) : (
            <p className="text-[#F66C0E]">Você não tem nenhuma tarefa.</p>
          )}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (newTodo.trim()) {
              setTodos([
                ...todos,
                { id: Date.now(), text: newTodo, completed: false },
              ]);
              setNewTodo("");
            }
          }}
          className="flex gap-2"
        >
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="O que você precisa fazer?"
            required
            className="border border-[#F66C0E] rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#F66C0E]"
            autoFocus
          />
          <button
            type="submit"
            className="bg-[#F66C0E] text-white rounded px-4 py-1 cursor-pointer hover:bg-[#F66C0E] hover:opacity-90 transition-colors duration-200"
          >
            Adicionar
          </button>
        </form>
      </div>
    </div>
  );
}

"use client";

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
};

function TodoItem({ id, title, complete, toggleTodo }: TodoItemProps) {
  return (
    <li className="ml-3">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer mr-2"
        defaultChecked={complete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
    </li>
  );
}

export default TodoItem;

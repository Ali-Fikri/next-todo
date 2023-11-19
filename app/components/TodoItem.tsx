type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
};

function TodoItem({ id, title, complete }: TodoItemProps) {
  return (
    <li className="ml-3">
      <input id={id} type="checkbox" className="cursor-pointer peer mr-2" />
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

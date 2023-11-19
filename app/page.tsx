import Link from "next/link";
import prisma from "../libs/prismaClient";
import TodoItem from "./components/TodoItem";
export default async function Home() {
  const todos = await prisma.todo.findMany();
  return (
    <main className="">
      <header className="flex justify-between items-center mb-4">
        <h1>Todos</h1>
        <Link
          href={"/new"}
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded"
        >
          New
        </Link>
      </header>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </main>
  );
}

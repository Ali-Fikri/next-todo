import prisma from "@/libs/prismaClient";
import Link from "next/link";
import { redirect } from "next/navigation";

async function createTodo(data: FormData) {
  "use server";

  const title = data.get("title")?.valueOf();
  if (typeof title != "string" || title.length === 0) {
    throw new Error("Invalid Title");
  }

  await prisma.todo.create({ data: { title, complete: false } });
  redirect("/");
}

function page() {
  return (
    <div>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">News</h1>
      </header>
      <form className="flex flex-col gap-2" action={createTodo} method="post">
        <input
          className="rounded p-1 outline-none border-2 bg-transparent"
          type="text"
          name="title"
          id="title"
        />
        <div className="flex justify-end gap-1">
          <Link
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded"
            href=".."
          >
            cancel
          </Link>
          <button
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded"
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default page;

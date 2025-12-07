import { redirect } from "next/navigation";
import { db } from "@/db";

export default function SnippetCreatePage() {
  async function createSnippet(formData: FormData) {
    "use server";

    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    await db.snippet.create({
      data: { title, code },
    });

    redirect("/");
  }

  return (
    <form action={createSnippet}>
      <div className="flex flex-col gap-4">
        <h3 className="font-bold">Create a Snippet</h3>

        <div className="flex flex-col gap-1">
          <label className="font-semibold">Title</label>
          <input name="title" className="border rounded px-2 py-1 w-full" />
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-semibold">Code</label>
          <textarea name="code" className="border rounded px-2 py-1 w-full" />
        </div>

        <button
          type="submit"
          className="font-bold rounded p-2 bg-blue-200 cursor-pointer"
        >
          Create
        </button>
      </div>
    </form>
  );
}

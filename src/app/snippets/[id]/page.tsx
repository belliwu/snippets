import { db } from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import * as actions from "@/actions";

interface SnippetProps {
  params: {
    id: string;
  };
}
export default async function SnippetShowPage(props: SnippetProps) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // 下面的 await props.params 是必须的，不然会报错
  const { id } = await props.params;

  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(id) },
  });

  if (!snippet) {
    return notFound();
  }

  const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);

  return (
    <div>
      <div className="flex justify-between items-center m-4">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="flex gap-4">
          <Link
            href={`/snippets/${id}/edit`}
            className="border rounded p-2 bg-blue-400"
          >
            Edit
          </Link>
          <form action={deleteSnippetAction}>
            <button type="submit" className="border rounded p-2 bg-blue-400">
              Delete
            </button>
          </form>
        </div>
      </div>
      <pre className="bg-gray-200 border-gray-200 p-3 border rounded">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}

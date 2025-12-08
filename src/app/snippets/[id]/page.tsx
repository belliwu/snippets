import { db } from "@/db";
import { notFound } from "next/navigation";

interface SnippetProps {
  params: {
    id: string;
  };
}
export default async function SnippetShowPage(props: SnippetProps) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const { id } = await props.params;

  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(id) },
  });

  if (!snippet) {
    return notFound();
  }
  console.log(snippet);

  return (
    <div>
      <div className="flex justify-between items-center m-4">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="flex gap-4">
          <button className="border rounded p-2 bg-blue-400">Edit</button>
          <button className="border rounded p-2 bg-blue-400">Delete</button>
        </div>
      </div>
      <pre className="bg-gray-200 border-gray-200 p-3 border rounded">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}

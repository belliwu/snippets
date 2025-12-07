import { db } from "@/db";
import { notFound } from "next/navigation";

interface SnippetProps {
  params: {
    id: string;
  };
}
export default async function SnippetShowPage(props: SnippetProps) {
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
      <h1>{snippet.title}</h1>
    </div>
  );
}

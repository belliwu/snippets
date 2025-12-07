import { db } from "@/db";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => (
    <div key={snippet.id}>
      <li>
        <h2>
          <span>{snippet.id}. </span>
          {snippet.title}
        </h2>
        <pre>{snippet.code}</pre>
        <hr />
      </li>
    </div>
  ));
  return (
    <div>
      <h1>Snippet List : </h1>
      <ul>{renderedSnippets}</ul>
    </div>
  );
}

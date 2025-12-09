"use client";

import { useState } from "react";
import { Snippet } from "@prisma/client";
import Ediror from "@monaco-editor/react";
import * as actions from "@/actions";

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState<string>(snippet.code);

  const handleEditChange = (value: string = "") => {
    setCode(value);
  };

  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);

  return (
    <div>
      <Ediror
        height="60vh"
        defaultLanguage="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditChange}
      />
      <form action={editSnippetAction}>
        <button
          type="submit"
          className="p-2 border rounded bg-blue-200 cursor-pointer"
        >
          save
        </button>
      </form>
    </div>
  );
}

"use client";

import { useActionState, startTransition } from "react";

import * as actions from "@/actions";

export default function SnippetCreatePage() {
  const [formState, action] = useActionState(actions.createSnippet, {
    message: "",
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    startTransition(() => {
      action(formData);
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <h3 className="font-bold">Create a Snippet</h3>

        <div className="flex flex-col gap-1">
          <label className="font-semibold">Title</label>
          <input name="title" className="border rounded px-2 py-1 w-full" />
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-semibold">Code</label>
          <textarea
            name="code"
            className="border rounded px-2 py-1 w-full h-40"
          />
        </div>
        {formState.message && (
          <div className="m-2 p-2 bg-red-500 border rounded-red-400 font-semibold">
            {formState.message}
          </div>
        )}

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

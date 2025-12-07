export default function SnippetCreatePage() {
  return (
    <form>
      <h3 className="font-bold m-3">Create a New Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label htmlFor="title" className="w-12">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="border rounded px-2 w-full"
          />
        </div>
        <div className="flex gap-4">
          <label htmlFor="code" className="w-12">
            code:
          </label>
          <input
            type="text"
            id="code"
            name="code"
            className="border rounded px-2 w-full"
          />
        </div>
        <button
          type="button"
          className="font-bold rounded p-2 bg-blue-200 cursor-pointer"
        >
          Create
        </button>
      </div>
    </form>
  );
}

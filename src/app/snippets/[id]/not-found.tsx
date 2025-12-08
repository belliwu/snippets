export default function SnippetNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Snippet Not Found</h1>
      <p className="text-lg text-gray-600">
        The snippet you are looking for does not exist or has been removed.
      </p>
    </div>
  );
}

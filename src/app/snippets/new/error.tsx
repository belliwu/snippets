"use client";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error }: ErrorPageProps) {
  return (
    <div className="m-2 p-2 bg-red-500 border rounded-red-400 font-semibold">
      An unexpected error {error.message} occurred.
    </div>
  );
}

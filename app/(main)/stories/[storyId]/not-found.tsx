import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold">
        This story could not be found.
      </h1>
      <Link
        href="/stories"
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
      >
        Back to all stories
      </Link>
    </main>
  );
}

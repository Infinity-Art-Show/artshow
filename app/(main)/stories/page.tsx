import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stories | Infinity Art Show",
  description: "Read inspiring stories from the art world",
};

export default async function StoriesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Stories</h1>
      <div className="min-h-[60vh]">
        {/* Stories content will be added here */}
      </div>
    </main>
  );
}

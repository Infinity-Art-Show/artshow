import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artists | Infinity Art Show",
  description: "Discover talented artists and their works",
};

export default async function ArtistsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Artists</h1>
      <div className="min-h-[60vh]">
        {/* Artists content will be added here */}
      </div>
    </main>
  );
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galleries | Infinity Art Show",
  description: "Explore our curated art galleries",
};

export default async function GalleriesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Galleries</h1>
      <div className="min-h-[60vh]">
        {/* Galleries content will be added here */}
      </div>
    </main>
  );
}

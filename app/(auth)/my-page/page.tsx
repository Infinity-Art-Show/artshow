import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Page | Infinity Art Show",
  description: "Your personal art collection and settings",
};

export default async function MyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Page</h1>
      <div className="min-h-[60vh]">
        {/* My Page content will be added here */}
      </div>
    </main>
  );
}

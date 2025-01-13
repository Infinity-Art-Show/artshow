import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auctions | Infinity Art Show",
  description: "Browse and bid on exclusive art pieces in our auctions",
};

export default async function AuctionsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Auctions</h1>
      <div className="min-h-[60vh]">
        {/* Auction content will be added here */}
      </div>
    </main>
  );
}

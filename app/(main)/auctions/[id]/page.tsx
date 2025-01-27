import { Metadata } from "next";
import Link from "next/link";

// Metadata for the detail page
export const metadata: Metadata = {
  title: "Artwork Detail | Infinity Art Show",
  description: "View details of this art piece and place your bids",
};

// Placeholder data
// In a real app, you'd fetch or dynamically load this based on `params.id`
const placeholderData = {
  id: "1",
  title: "Sunflowers",
  artist: "Alena Torff",
  price: 120,
  bids: 1,
  timeLeft: "2d 15h 30m",
  imageUrl: "/sunflowers.png",
  description:
    "Sun flowers by Van Gogh is one of the most famous paintings in the world. It is a painting of a vase of sunflowers, and was probably painted in Arles, France, in 1888. It is now in the National Gallery, London.",
};

export default function ArtworkDetailPage({ params }: { params: { id: string } }) {
  // Here, you could fetch data from your backend using `params.id`.
  // For now, we’re returning placeholder data regardless of the ID.
  const item = placeholderData;

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Simple navigation placeholder */}
      {/* <header className="flex justify-between items-center mb-6">
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/auctions">Auctions</Link></li>
            <li><Link href="/galleries">Galleries</Link></li>
            <li><Link href="/artists">Artists</Link></li>
            <li><Link href="/donate">Donate</Link></li>
            <li><Link href="/stories">Stories</Link></li>
            <li><Link href="/mypage">My Page</Link></li>
            <li><Link href="/logout">Logout</Link></li>
          </ul>
        </nav>
      </header> */}

      <div className="flex flex-col md:flex-row gap-8">
        {/* Artwork Image */}
        <div className="md:w-1/2">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Artwork Details */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{item.title}</h1>
          <p className="text-gray-600 mb-2">{item.artist}</p>
          <p className="mb-2">C${item.price} ({item.bids} bids)</p>
          <p className="text-sm text-gray-500 mb-4">
            Time left: {item.timeLeft}
          </p>
          <p className="mb-4">{item.description}</p>

          {/* Placeholder for bidding or other actions */}
          <button className="bg-purple-600 text-white px-4 py-2 rounded">
            Place a Bid
          </button>
        </div>
      </div>
    </main>
  );
}

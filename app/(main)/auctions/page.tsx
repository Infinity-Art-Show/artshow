import { Metadata } from "next";
import Link from "next/link";

// This metadata will populate the <head> for this route
export const metadata: Metadata = {
  title: "Auctions | Infinity Art Show",
  description: "Browse and bid on exclusive art pieces in our auctions",
};

// Placeholder artwork data
const placeholderAuctions = [
  {
    id: "1",
    title: "Sunflowers",
    artist: "Alena Torff",
    price: 120,
    bids: 1,
    timeLeft: "2d 15h 30m",
    imageUrl: "/sunflowers.png",
  },
  {
    id: "2",
    title: "Lake Symphony",
    artist: "John Doe",
    price: 14000,
    bids: 10,
    timeLeft: "16d 22h",
    imageUrl: "/2.jpg",
  },
  {
    id: "3",
    title: "Castle in the Sky",
    artist: "Jane Smith",
    price: 120,
    bids: 1,
    timeLeft: "5d 22h",
    imageUrl: "/3.jpg",
  },
  {
    id: "4",
    title: "Still Life with Flowers",
    artist: "Alena Torff",
    price: 14000,
    bids: 10,
    timeLeft: "16d 22h",
    imageUrl: "/4.jpg",
  },
  // Add more placeholders as needed
];

export default function AuctionsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Simple navigation placeholder */}
      {/* <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Auctions</h1>
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

      <div className="min-h-[60vh] flex space-x-8">
        {/* Filter Sidebar */}
        <aside className="w-1/5">
          {/* Medium Filter */}
          <div className="mb-4">
            <h2 className="font-semibold mb-2">Medium</h2>
            <div>
              <input type="checkbox" id="oil" name="oil" />
              <label htmlFor="oil" className="ml-2">Oil painting</label>
            </div>
            <div>
              <input type="checkbox" id="acrylic" name="acrylic" />
              <label htmlFor="acrylic" className="ml-2">Acrylic</label>
            </div>
            <div>
              <input type="checkbox" id="ink" name="ink" />
              <label htmlFor="ink" className="ml-2">Ink</label>
            </div>
            <div>
              <input type="checkbox" id="gesso" name="gesso" />
              <label htmlFor="gesso" className="ml-2">Gesso</label>
            </div>
          </div>
          
          {/* Archival Quality */}
          <div className="mb-4">
            <h2 className="font-semibold mb-2">Archival quality</h2>
            <div>
              <input type="checkbox" id="archival" name="archival" />
              <label htmlFor="archival" className="ml-2">Made with Archival Quality</label>
            </div>
          </div>
          
          {/* Framing */}
          <div className="mb-4">
            <h2 className="font-semibold mb-2">Framing</h2>
            <div>
              <input type="checkbox" id="framingYes" name="framingYes" />
              <label htmlFor="framingYes" className="ml-2">Yes</label>
            </div>
            <div>
              <input type="checkbox" id="framingNo" name="framingNo" />
              <label htmlFor="framingNo" className="ml-2">No</label>
            </div>
          </div>
          
          {/* You can add a filter button or other controls here */}
        </aside>

        {/* Artwork Listing */}
        <section className="flex-1">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {placeholderAuctions.map((item) => (
              <Link
                key={item.id}
                href={`/auctions/${item.id}`}
                className="border p-2 hover:shadow-md transition"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-48 object-cover mb-2"
                />
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.artist}</p>
                <p className="mt-1">C${item.price} ({item.bids} bids)</p>
                <p className="text-sm text-gray-500">{item.timeLeft} left</p>
              </Link>
            ))}
          </div>

          {/* Pagination (placeholder) */}
          <div className="mt-6 flex justify-center space-x-2">
            <button className="px-3 py-1 border">1</button>
            <button className="px-3 py-1 border">2</button>
            <button className="px-3 py-1 border">3</button>
            <span>...</span>
            <button className="px-3 py-1 border">10</button>
          </div>
        </section>
      </div>
    </main>
  );
}



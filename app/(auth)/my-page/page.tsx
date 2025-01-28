import { Metadata } from "next";
import Dashboard from "./Dashboard";

export const metadata: Metadata = {
  title: "My Page | Infinity Art Show",
  description: "Your personal art collection and settings",
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
    imageUrl: "/lake-symphony.png",
  },
  {
    id: "3",
    title: "Mountain Glory",
    artist: "Sarah Lin",
    price: 3000,
    bids: 5,
    timeLeft: "5d 3h",
    imageUrl: "/mountain-glory.png",
  },
  {
    id: "4",
    title: "Urban Night",
    artist: "Evan Drew",
    price: 250,
    bids: 3,
    timeLeft: "1d 18h",
    imageUrl: "/urban-night.png",
  },
];

export default async function MyPage() {
  const username = "Lovely Dog";
  const joinedDate = "March 2017";

  return (
    <div className="flex">
      {/* Left Dashboard */}
      <Dashboard />

      {/* User Profile */}
      <main className="ml-[300px] mt-[10px] flex-1 container mx-auto px-4 py-8">
        {/* Background */}
        <div className="relative bg-cover bg-center h-60 rounded-lg mb-20" style={{ backgroundImage: "url('/UserBackground.jpg')" }}>
          {/* User Image */}
          <div className="absolute w-24 h-24 rounded-full border-4 border-white overflow-hidden left-1/2 transform -translate-x-1/2 bottom-[-48px]">
            <img
              src="/avatar.jpg"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Username and Joined Date */}
          <div className="absolute bottom-[-96px] left-1/2 transform -translate-x-1/2 text-center">
            <h2 className="text-xl font-bold text-gray-800">{username}</h2>
            <p className="text-gray-500 text-sm">Joined {joinedDate}</p>
          </div>
        </div>

        {/* Auction Table */}
        <section>
          <h2 className="text-2xl font-bold mb-4 mt-50">Auction Showcase</h2>
          <div className="overflow-x-auto rounded-lg shadow-md border border-gray-300">
            <table className="table-auto w-full text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">Bids</th>
                  <th className="px-4 py-2">Time Left</th>
                </tr>
              </thead>
              <tbody>
                {placeholderAuctions.map((auction) => (
                  <tr key={auction.id} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-2 flex items-center gap-2">
                      {/* <img
                        src={auction.imageUrl}
                        alt={auction.title}
                        className="w-10 h-10 rounded-md"
                      /> */}
                      <span>{auction.title}</span>
                    </td>
                    <td className="px-4 py-2 text-gray-800">${auction.price.toLocaleString()}</td>
                    <td className="px-4 py-2 text-gray-800">{auction.bids}</td>
                    <td className="px-4 py-2 text-gray-800">{auction.timeLeft}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

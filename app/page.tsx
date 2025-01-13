// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const sections = [
    {
      idx: 0,
      headline2: "Auctions",
      headline3: "Opportunities to get real value",
      description:
        "Get value at the right price. You might not spend millions on a Picasso, but many quality art pieces sell for less than in a gallery.",
      image: "/harmony-and-peace.png",
      link: "/auctions",
      imageLeft: false,
    },
    {
      idx: 1,
      headline2: "Galleries",
      headline3: "Explore our curated galleries",
      description:
        "Explore our curated galleries featuring contemporary artworks from around the world. Find your next masterpiece.",
      image: "/galleries.png",
      link: "/galleries",
      imageLeft: true,
    },
    {
      idx: 2,
      headline2: "Artists",
      headline3: "Explore our curated galleries",
      description:
        "Explore our curated galleries featuring contemporary artworks from around the world. Find your next masterpiece.",
      image: "/artists.png",
      link: "/artists",
      imageLeft: true,
    },
    // 必要に応じて追加のセクションを定義
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {sections.map((section, index) => (
        <div
          key={section.idx}
          className={`
            grid grid-cols-1 lg:grid-cols-2 gap-8 items-center 
            ${index !== sections.length - 1 ? "mb-24" : ""}
          `}
        >
          {/* Content Section */}
          <div className={`${section.imageLeft ? "lg:order-2" : ""}`}>
            <h2 className="text-4xl font-bold mb-6">{section.headline2}</h2>
            <h3 className="text-2xl font-bold mb-6">{section.headline3}</h3>
            <p className="text-lg text-gray-600 mb-8">{section.description}</p>
            <Link
              href={section.link}
              className="inline-flex items-center px-6 py-3 border border-transparent 
                text-base font-medium rounded-md text-white bg-primary 
                hover:bg-primary-dark transition-colors duration-200"
            >
              Explore {section.headline2}
            </Link>
          </div>

          {/* Image Section */}
          <div
            className={`relative h-[400px] ${
              section.imageLeft ? "lg:order-1" : ""
            }`}
          >
            <Image
              src={section.image}
              alt={`${section.headline2} preview`}
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      ))}
    </main>
  );
}

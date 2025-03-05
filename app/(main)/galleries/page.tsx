import { Metadata } from "next";
import Link from "next/link";
import { galleries } from "./_dummyData";

export const metadata: Metadata = {
  title: "Galleries | Infinity Art Show",
  description: "Explore our curated art galleries",
};

export default async function GalleriesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Galleries</h1>
      <div className="min-h-[60vh]">
        <ul>
          {galleries.map((artWork) => (
            <Link
              key={artWork.galleryId}
              href={`./galleries/${artWork.galleryId}`}
            >
              <li>{artWork.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </main>
  );
}

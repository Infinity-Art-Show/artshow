import StoryCard from "@/app/components/features/StoryCard";
import { Metadata } from "next";
import Link from "next/link";
import { mockData } from "./_mockdata";

export const metadata: Metadata = {
  title: "Stories | Infinity Art Show",
  description: "Read inspiring stories from the art world",
};

export default async function StoriesPage() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Stories</h1>
      <div className="min-h-[60vh] grid md:grid-cols-3 gap-10">
        {mockData.map((story) => (
          <Link href={`/stories/${story.id}`} key={story.id}>
            <StoryCard story={story} />
          </Link>
        ))}
      </div>
    </section>
  );
}

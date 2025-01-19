import { Metadata } from "next";
import Image from "next/image";
import { mockData } from "../_mockdata";

export const metadata: Metadata = {
  title: "Stories | Infinity Art Show",
  description: "Read inspiring stories from the art world",
};


export async function generateStaticParams() {
  return mockData.map((story) => ({
    storyId: story.id,
  }));
}

// TODO: fetch story data by server action
// export const dynamic = 'force-dynamic';

export default async function page({ params }: { params: { storyId: string } }) {
  const story = mockData.find((data) => data.id === params.storyId);

  if (!story) {
    return <p>Story not found</p>;
  }

  return (
    <section className="container mx-auto px-4 py-8">
      <p className="text-3xl font-bold mb-6">Story</p>
      <article className="grid gap-10">
        <div className="relative aspect-video">
          <Image src={story.thumbnailImage} alt={story.title} fill />
        </div>
        <h1>{story.title}</h1>
        <p>{story.body}</p>
      </article>
    </section>
  );
}

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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

export default async function page({
  params,
}: {
  params: { storyId: string };
}) {
  const story = mockData.find((data) => data.id === params.storyId);

  if (!story) {
    return <p>Story not found</p>;
  }

  return (
    <section className="container mx-auto px-4 pb-8">
      {/* {TODO: Create breadcrumb} */}
      <p className="text-sm mb-6">Stories &gt; {story.title}</p>
      <article className="grid gap-10">
        <div className="relative aspect-[27/10]">
          <Image
            src={story.thumbnailImage}
            alt={story.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="container max-w-3xl mx-auto grid gap-6">
          <h1 className="text-5xl font-bold">{story.title}</h1>
          <p className="text-xs text-slate-500">{story.createdAt}</p>
          <p>{story.body}</p>
          <Link
            href="/"
            className="text-sm text-slate-500 decoration-solid underline"
          >
            {story.artwork.artName}
          </Link>
          <div className="py-10 px-10 flex items-start justify-center border border-slate-300 rounded-lg gap-6">
            <Image
              src={story.author.mainImage}
              alt={story.author.authorName}
              width={120}
              height={120}
              className="rounded-full aspect-square object-cover"
            />
            <div className="grid gap-4">
              <h3 className="text-2xl font-bold">{story.author.authorName}</h3>
              <p className="text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, minus in autem explicabo eos iusto atque quos, obcaecati assumenda ut saepe numquam asperiores! Ab sit nostrum accusamus molestias! Reprehenderit, modi?</p>
              <Link href="/" className="px-4 py-2 border border-slate-500 rounded-full text-slate-500 text-xs w-fit hover:border-secondary hover:text-secondary transition-all duration-300">View Artist Profile</Link>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

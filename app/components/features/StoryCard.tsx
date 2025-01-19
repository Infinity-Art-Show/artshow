import { Story } from "@/app/types/story";
import Image from "next/image";

type Props = {
  story: Story;
};

export default function StoryCard({ story }: Props) {
  return (
    <div className="rounded-lg border border-slate-200 flex flex-col md:h-[320px] group">
      <div className="relative h-52 md:h-auto md:aspect-[2/3] overflow-hidden rounded-t-lg">
        <Image
          src={story.thumbnailImage}
          alt={`${story.title}'s thumbnail`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-all duration-500"
        />
      </div>
      <div className="p-4 flex flex-col justify-between h-full gap-4 md:gap-0">
        <h2 className="text-xl font-medium">{story.title}</h2>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <div className="flex gap-2 items-center">
            <Image
              src={story.author.mainImage}
              alt={story.author.authorName}
              width={24}
              height={24}
              className="rounded-full object-cover aspect-square"
            />
            <p className="font-medium">{story.author.authorName}</p>
          </div>
          <p className="font-normal">{story.createdAt}</p>
        </div>
      </div>
    </div>
  );
}

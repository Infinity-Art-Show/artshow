import ArtDescription from "@/app/components/features/ArtDescription";
import ImageCarousel from "@/app/components/features/ImageCarousel";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { galleries } from "../_dummyData";

export const metadata: Metadata = {
  title: "Galleries | Infinity Art Show",
  description: "Browse unique galleries and artistic expressions",
};

export async function generateStaticParams() {
  return galleries.map(({ galleryId }) => ({
    galleryId,
  }));
}

const GalleryPage = async ({
  params,
}: {
  params: Promise<{ galleryId: string }>;
}) => {
  const { galleryId } = await params;

  // Find the gallery and its artworks based on the galleryId
  const foundGallery = galleries.find(({ galleryId: id }) => id === galleryId);

  if (!foundGallery) {
    return notFound();
  }

  const { artworks } = foundGallery;

  return (
    <section className="container mx-auto px-28 pb-8 space-y-20">
      <section className="h-[480px] flex justify-between">
        <ImageCarousel artworks={artworks} />
        <div className="space-y-4 flex-1">
          <div>
            <h1 className="font-bold text-2xl">{artworks.title}</h1>
            <p className="font-normal text-lg text-gray-400">Stan Zhekov</p>
          </div>
          <div className="space-y-2">
            <p className="font-normal text-sm">Oil, acrylic, flash on burlap</p>
            <div className="flex text-sm">
              <p>30 H × 30 W × 4 D inches&nbsp;</p>
              <p className="text-gray-400">/ 30 H × 30 W × 4 D cm</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="space-y-6">
          <h2 className="font-bold text-2xl">About the art work</h2>
          <ArtDescription />
        </div>
        <div className="mt-6 border-t-[0.5px] border-gray-400 space-y-4">
          <h2 className="uppercase font-bold text-lg mt-6">Details</h2>
          <dl className="grid grid-cols-[minmax(0,200px)_1fr] gap-x-4 gap-y-2 flex-wrap">
            <dt className="font-bold break-words">Medium</dt>
            <dd>Mixed Media</dd>
            <dt className="font-bold break-words">Materials</dt>
            <dd>Oil, acrylic, flash on burlap</dd>
            <dt className="font-bold break-words">Durability</dt>
            <dd>Fade-resistant</dd>
            <dt className="font-bold break-words">Light Protection</dt>
            <dd>UV-filtering glass</dd>
            <dt className="font-bold break-words">Storage Options</dt>
            <dd>Archival boxes</dd>
            <dt className="font-bold break-words">Size</dt>
            <dd>30 H × 30 W × 4 D inches / 30 H × 30 W × 4 D cm</dd>
            <dt className="font-bold break-words">Framing</dt>
            <dd>Yes</dd>
          </dl>
        </div>
        <div className="flex gap-6 border-[0.5px] border-gray-400 py-10 px-6 mt-12">
          <Image
            src="/sample-artist.jpg"
            alt="artist image"
            width={480}
            height={480}
            className="h-36 w-36 object-cover rounded-full"
          />
          <div className="space-y-4 ">
            <div className="flex justify-between">
              <p className="font-semibold text-2xl">Alena Torff</p>
              <Link
                href={"/"}
                className="text-slate-500 font-sm px-6 py-2 rounded-full border border-slate-500 hover:bg-slate-100/60 transition-all duration-300"
              >
                View artist profile
              </Link>
            </div>
            <p className="text-sm">
              Alena Torff is a contemporary painter known for her evocative use
              of color and form to explore themes of memory, nature, and
              emotion. Originally from Vancouver, Alena’s early years were
              shaped by the lush landscapes and changing seasons of her
              hometown, which continue to influence her work today. With formal
              training in fine arts from [University/Art School], Alena has
              developed a distinct style that combines expressive brushwork with
              a nuanced approach to light and shadow. Her pieces often feature
              layers of oil and acrylic, merging delicate details with bold
              strokes to create immersive, almost dreamlike compositions. Each
              work invites the viewer into a reflective space, allowing them to
              connect with the natural world and the complexities of human
              emotion.
            </p>
          </div>
        </div>
      </section>
      <section className="space-y-6">
        <div className="flex justify-between">
          <h2 className="font-bold text-2xl">Similar art work</h2>
          <Link className="text-sm font-medium text-slate-500" href={"/"}>
            View all artwork
          </Link>
        </div>
      </section>
    </section>
  );
};

export default GalleryPage;

import { notFound } from "next/navigation";
import { galleries } from "../_mockdata";

export async function generateStaticParams() {
  return galleries.map(({ artworks }) => ({
    artworkId: artworks,
  }));
}

const GalleryPage = async ({
  params,
}: {
  params: Promise<{ galleryId: string }>;
}) => {
  const { galleryId } = await params;

  // Try to find the artwork by galleryId
  const foundArtwork = galleries.find(({ galleryId: id }) => id === galleryId);

  if (!foundArtwork) {
    return notFound();
  }

  const { name, description } = foundArtwork;

  return (
    <div>
      <h1>GalleryPage: {name}</h1>
      <p>{description}</p>
    </div>
  );
};

export default GalleryPage;

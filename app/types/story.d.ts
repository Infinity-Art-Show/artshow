export type Story = {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  thumbnailImage: string;
  author: {
    userId: string;
    mainImage: string;
    authorName: string;
  };
};

export type Story = {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  thumbnailImage: string;
  artwork: {
    id: string;
    artName: string;
  }
  author: {
    userId: string;
    mainImage: string;
    authorName: string;
  };
};

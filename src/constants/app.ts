const RECENT_SAVES: string[] = [
  "https://i.pinimg.com/control1/1200x/e5/7d/50/e57d509746579cd54b6cb4c6df97dc5e.jpg",
  "https://i.pinimg.com/control1/736x/ae/88/5b/ae885b9fff986fc247296c66ad49134c.jpg",
  "https://i.pinimg.com/control1/1200x/07/01/d5/0701d55514550cd3fcd9570f08854eb0.jpg",
  "https://i.pinimg.com/736x/ce/16/ba/ce16ba3c515c7ff6c0664d8f647beb11.jpg",
];

const RANDOM_COLLECTION: string[] = [
  "https://i.pinimg.com/control1/736x/3a/61/b5/3a61b59cae32f42ef7a7f9e21377e011.jpg",
  "https://i.pinimg.com/736x/5f/90/71/5f9071ce3b7ac8a2bcf29f2b104d5d69.jpg",
  "https://i.pinimg.com/control1/736x/cb/74/73/cb7473f470a6defa66b87077cf02f922.jpg",
  "https://i.pinimg.com/736x/04/00/90/0400904f5ee697578f1e0eb5e8871579.jpg",
];

const PROFILE_PICTURE: string = `https://i.pinimg.com/control1/736x/2a/35/f4/2a35f40dbb2b21fa538064fb6788cf1e.jpg`;

const PROFILE = {
  name: "rit3zh",
  badge: "Expert",
  shots: 1532,
  picture: PROFILE_PICTURE,
} as const;

type GalleryCollection = {
  title: string;
  images: number;
  videos: number;
  saved: boolean;
  thumbnails: string[];
};

const COLLECTIONS: GalleryCollection[] = [
  {
    title: "Dreamscapes",
    images: 24,
    videos: 3,
    saved: true,
    thumbnails: RECENT_SAVES,
  },
  {
    title: "Random Collection",
    images: 12,
    videos: 4,
    saved: false,
    thumbnails: RANDOM_COLLECTION,
  },
];

const SPECIAL_MEMORIES: string[] = [
  "https://i.pinimg.com/736x/f2/6a/78/f26a78ebe5be61778dca3696faf05b28.jpg",
  "https://i.pinimg.com/control1/736x/23/cd/56/23cd561f2557c23c099ef25063879ef9.jpg",
  "https://i.pinimg.com/736x/09/e6/98/09e698bc9001af01e26544c304e9dbbf.jpg",
  "https://i.pinimg.com/736x/ae/59/12/ae5912a1b7d30033812d1172f366d27f.jpg",
];

export {
  COLLECTIONS,
  PROFILE,
  PROFILE_PICTURE,
  RANDOM_COLLECTION,
  RECENT_SAVES,
  SPECIAL_MEMORIES,
};
export type { GalleryCollection };

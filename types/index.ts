import type { ListType } from "~/enums/ListType";

export type { Video, Review };

declare global {
  interface Video {
    id: number;
    title: string;
    creatorName: string;
    duration: number;
    link: string;
    thumbnail: string;
  }

  interface Review {
    id: number;
    video: Video;
    burgers?: number;
    isLiked: boolean;
    reviewText: string;
    tags: string[];
    createdOn: string;
    createdBy: User;
  }

  interface User {
    id: number;
    username: string;
    displayName: string;
    profilePic: string;
    bio: string;
  }

  interface List {
    id: number;
    name: string;
    description: string;
    type: ListType;
    tags: string[];
    userId: number;
    reviews: Review[];
  }
}

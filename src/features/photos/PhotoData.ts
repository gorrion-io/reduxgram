import { CommentData } from "@src/features/comments/CommentData";

export interface PhotoData {
    id: string;
    link: string;
    comments: CommentData[];
    images: {
        standard: string;
        thumbnail: string;
    };
}

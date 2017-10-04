import { CommentData } from "@src/features/comments/comment-data.interface";

export interface PhotoData {
    id: string;
    link: string;
    comments: CommentData[];
    images: {
        standard: string;
        thumbnail: string;
    };
}

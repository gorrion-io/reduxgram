export interface Photo {
    id: string;
    link: string;
    comments: Comment[];
    images: {
        standard: string;
        thumbnail: string;
    };
}

export interface Comment {
    id: string;
    username: string;
    text: string;
}

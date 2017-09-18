export interface User {
    id: string;
    full_name: string;
    profile_picture: string;
    username: string;
}

export interface Thumbnail {
    width: number;
    height: number;
    url: string;
}

export interface LowResolution {
    width: number;
    height: number;
    url: string;
}

export interface StandardResolution {
    width: number;
    height: number;
    url: string;
}

export interface Images {
    thumbnail: Thumbnail;
    low_resolution: LowResolution;
    standard_resolution: StandardResolution;
}

export interface From {
    id: string;
    full_name: string;
    profile_picture: string;
    username: string;
}

export interface Caption {
    id: string;
    text: string;
    created_time: string;
    from: From;
}

export interface Datum {
    id: string;
    full_name: string;
    profile_picture: string;
    username: string;
}

export interface Likes {
    data: Datum[];
    count: number;
}

export interface From2 {
    id: string;
    full_name: string;
    profile_picture: string;
    username: string;
}

export interface Datum2 {
    id: string;
    text: string;
    created_time: string;
    from: From2;
}

export interface Comments {
    data: Datum2[];
    count: number;
}

export interface Location {
    name: string;
}

export interface Item {
    id: string;
    code: string;
    user: User;
    images: Images;
    created_time: string;
    caption: Caption;
    likes: Likes;
    comments: Comments;
    can_view_comments: boolean;
    can_delete_comments: boolean;
    type: string;
    link: string;
    location: Location;
    alt_media_url?: any;
}

export interface RootObject {
    items: Item[];
    more_available: boolean;
    status: string;
    next: string;
    previous: string;
}

import { RouterState } from "connected-react-router";

import { PhotoData } from "@src/features/photos/photo-data.interface";

export interface RootState {
    readonly router: RouterState;
    readonly photos: PhotosState;
}

export interface PhotosState {
    profileName: string;
    photos: ReadonlyArray<PhotoData>;
    isFetching: boolean;
}

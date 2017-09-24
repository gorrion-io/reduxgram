import { RouterState } from "react-router-redux";

import { Photo } from "@src/interfaces/data";

export interface RootState {
    readonly router: RouterState;
    // readonly selectedPhoto: SelectedPhotoState;
    readonly photos: PhotosState;
}

// export type SelectedPhotoState = Readonly<Photo>|null;
export type PhotosState = {
    profileName: string;
    photos: ReadonlyArray<Photo>;
    isFetching: boolean;
}

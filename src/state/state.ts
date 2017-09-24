import { Photo } from "@src/interfaces/data";

export interface RootState {
    readonly selectedPhoto: SelectedPhotoState;
    readonly photos: PhotosState;
}

export type SelectedPhotoState = Readonly<Photo>|null;
export type PhotosState = ReadonlyArray<Photo>;

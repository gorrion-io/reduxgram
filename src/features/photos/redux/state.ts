import { PhotoData } from "@src/features/photos/PhotoData";

export interface PhotosState {
    profileName: string;
    photos: ReadonlyArray<PhotoData>;
    isFetching: boolean;
}

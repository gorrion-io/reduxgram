import { combineReducers } from "redux";

import { SelectedPhotoReducer } from "@src/reducers/selected-photo-reducer";
import { PhotosReducer } from "@src/reducers/photos-reducer";
import { RootState } from "@src/state/state";

export const rootReducer = combineReducers<RootState>({
    selectedPhoto: SelectedPhotoReducer,
    photos: PhotosReducer,
});

import { combineReducers } from "redux";

import { SelectedPhotoReducer } from "reducers/selected-photo-reducer";
import { PhotosReducer } from "reducers/photos-reducer";
import { RootState } from "state/state";

export const rootReducer = combineReducers<RootState>({
    selectedPhoto: SelectedPhotoReducer,
    photos: PhotosReducer,
});

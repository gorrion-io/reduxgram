import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

// import { SelectedPhotoReducer } from "@src/reducers/selected-photo-reducer";
import { PhotosReducer } from "@src/reducers/photos-reducer";
import { RootState } from "@src/state/state";

export const rootReducer = combineReducers<RootState>({
    router: routerReducer,
    // selectedPhoto: SelectedPhotoReducer,
    photos: PhotosReducer,
});

import { combineReducers } from "redux";

import { photosReducer } from "@src/features/photos/photos-reducer";
import { RootState } from "@src/redux/state";

export const rootReducer = combineReducers<RootState>({
    photos: photosReducer,
});

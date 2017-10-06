import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import { photosReducer } from "@src/features/photos/photos-reducer";
import { RootState } from "@src/redux/state";

export const rootReducer = combineReducers<RootState>({
    photos: photosReducer,
    form: formReducer,
});

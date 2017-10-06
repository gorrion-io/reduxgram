import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import { photosReducer } from "@src/features/photos/redux/reducer";
import { RootState } from "@src/redux/root-state";

export const rootReducer = combineReducers<RootState>({
    photos: photosReducer,
    form: formReducer,
});

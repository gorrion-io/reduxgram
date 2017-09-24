import { PhotosState } from "@src/state/state";
import { Reducer } from "@src/types/redux";
import { ActionType } from "@src/actions/types";

export const PhotosReducer: Reducer<PhotosState> = (state = [], action) => {
    switch (action.type) {
        case ActionType.FETCH_PHOTOS:
            return action.payload;

        default:
            return state;
    }
};

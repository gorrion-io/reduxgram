import { PhotosState } from "state/state";
import { Reducer } from "types/redux";
import { ActionType } from "actions/types";

export const PhotosReducer: Reducer<PhotosState> = (state = [], action) => {
    switch (action.type) {
        case ActionType.FETCH_PHOTOS:
            return action.payload;

        default:
            return state;
    }
};

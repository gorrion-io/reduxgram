import { PhotosState } from "@src/state/state";
import { Reducer } from "@src/types/redux";
import { ActionType } from "@src/actions/types";

const initialPhotosState: PhotosState = {
    profileName: "",
    photos: [],
}

export const PhotosReducer: Reducer<PhotosState> = (state = initialPhotosState, action) => {
    switch (action.type) {
        case ActionType.FETCH_PHOTOS:
            return action.payload;

        default:
            return state;
    }
};

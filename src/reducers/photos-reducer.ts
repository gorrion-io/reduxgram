import { PhotosState } from "@src/state/state";
import { Reducer } from "@src/types/redux";
import { ActionType } from "@src/actions/types";

const initialPhotosState: PhotosState = {
    profileName: "",
    photos: [],
    isFetching: false,
}

export const PhotosReducer: Reducer<PhotosState> = (state = initialPhotosState, action) => {
    switch (action.type) {
        case ActionType.PHOTOS_FETCHED:
            return {
                profileName: action.payload.profileName,
                photos: action.payload.photos,
                isFetching: false,
            }
        case ActionType.PHOTOS_FETCH_STARTED:
            return {
                ...state,
                isFetching: true,
            }

        default:
            return state;
    }
};

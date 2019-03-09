import { Reducer } from "@src/common/types/redux";
import { ActionType } from "@src/redux/action-types";
import { PhotosState } from "@src/features/photos/redux/state";

const initialPhotosState: PhotosState = {
    profileName: "",
    photos: [],
    isFetching: false,
};

export const photosReducer: Reducer<PhotosState> = (state = initialPhotosState, action) => {
    switch (action.type) {
        case ActionType.Photos.FETCH_STARTED:
            return {
                ...state,
                isFetching: true,
            };
        case ActionType.Photos.FETCHED:
            return {
                profileName: action.payload.profileName,
                photos: action.payload.photos,
                isFetching: false,
            };
        default:
            return state;
    }
};

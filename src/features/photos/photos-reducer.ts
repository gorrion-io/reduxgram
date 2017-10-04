import { Reducer } from "@src/common/types/redux";
import { ActionType } from "@src/redux/types";
import { PhotosState } from "@src/redux/state";

const initialPhotosState: PhotosState = {
    profileName: "",
    photos: [],
    isFetching: false,
};

export const photosReducer: Reducer<PhotosState> = (state = initialPhotosState, action) => {
    switch (action.type) {
        case ActionType.PHOTOS_FETCH_STARTED:
            return {
                ...state,
                isFetching: true,
            };
        case ActionType.PHOTOS_FETCHED:
            return {
                profileName: action.payload.profileName,
                photos: action.payload.photos,
                isFetching: false,
            };
        default:
            return state;
    }
};

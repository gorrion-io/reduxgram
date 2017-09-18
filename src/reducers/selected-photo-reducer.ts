import { Reducer } from "types/redux";
import { SelectedPhotoState } from "state/state";
import { ActionType } from "actions/types";

export const SelectedPhotoReducer: Reducer<SelectedPhotoState> = (state = null, action) => {
    switch (action.type) {
        case ActionType.SELECT_PHOTO:
            return action.payload;
        case ActionType.FETCH_PHOTOS:
            return action.payload[0];
            
        default:
            return state;
    }
};

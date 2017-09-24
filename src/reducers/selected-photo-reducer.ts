import { Reducer } from "@src/types/redux";
import { SelectedPhotoState } from "@src/state/state";
import { ActionType } from "@src/actions/types";

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

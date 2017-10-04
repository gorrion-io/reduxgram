import { ActionType } from "@src/redux/types";
import { BasicAction } from "@src/redux/interfaces";
import { PhotoData } from "@src/features/photos/photo-data.interface";

export interface PhotosFetchedAction extends BasicAction {
    readonly type: ActionType.PHOTOS_FETCHED;
    readonly payload: {
        profileName: string;
        photos: ReadonlyArray<PhotoData>;
    };
}

export interface PhotosFetchStatedAction extends BasicAction {
    readonly type: ActionType.PHOTOS_FETCH_STARTED;
    readonly payload?: never;
}

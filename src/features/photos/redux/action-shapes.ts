import { BasicAction } from "@src/redux/action-shapes";
import { PhotoData } from "@src/features/photos/PhotoData";
import { ActionType } from "@src/redux/action-types";

interface PhotosFetchedAction extends BasicAction {
    readonly type: typeof ActionType.Photos.FETCHED;
    readonly payload: {
        profileName: string;
        photos: ReadonlyArray<PhotoData>;
    };
}

interface PhotosFetchStatedAction extends BasicAction {
    readonly type: typeof ActionType.Photos.FETCH_STARTED;
    readonly payload?: never;
}

export type PhotosActions =
    | PhotosFetchedAction
    | PhotosFetchStatedAction
;

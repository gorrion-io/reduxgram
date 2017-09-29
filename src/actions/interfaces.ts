import { Action as ReduxAction } from "redux";

import { Photo } from "@src/interfaces/data";
import { ActionType } from "@src/actions/types";

export type RootAction =
    | OtherActions
    // | SelectPhotoAction
    | PhotosFetchedAction
    | PhotosFetchStatedAction
;

export interface BasicAction extends ReduxAction {
    readonly type: string;
    readonly payload?: any;
    readonly error?: boolean;
}

export interface OtherActions {
    type: "OTHER_ACTIONS";
}

// export interface SelectPhotoAction extends BasicAction {
//     readonly type: ActionType.SELECT_PHOTO;
//     readonly payload: Readonly<Photo>;
// }

export interface PhotosFetchedAction extends BasicAction {
    readonly type: ActionType.PHOTOS_FETCHED;
    readonly payload: {
        profileName: string;
        photos: ReadonlyArray<Photo>;
    }
}

export interface PhotosFetchStatedAction extends BasicAction {
    readonly type: ActionType.PHOTOS_FETCH_STARTED;
}

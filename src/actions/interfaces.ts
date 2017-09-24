import { Action as ReduxAction } from "redux";

import { Photo } from "@src/interfaces/data";
import { ActionType } from "@src/actions/types";

export type RootAction =
    | OtherActions
    | SelectPhotoAction
    | FetchPhotosAction
;

export interface BasicAction extends ReduxAction {
    readonly type: string;
    readonly payload: any;
    readonly error?: boolean;
}

export interface OtherActions {
    type: "OTHER_ACTIONS";
}

export interface SelectPhotoAction extends BasicAction {
    readonly type: ActionType.SELECT_PHOTO;
    readonly payload: Readonly<Photo>;
}

export interface FetchPhotosAction extends BasicAction {
    readonly type: ActionType.FETCH_PHOTOS;
    readonly payload: ReadonlyArray<Photo>;
}

import { Action as ReduxAction } from "redux";

import { PhotosActions } from "@src/features/photos/redux/action-shapes";
import { PrimitiveObject } from "@src/common/types/primitives";

export type RootAction =
    | OtherActions
    | PhotosActions
;

export interface BasicAction extends ReduxAction {
    readonly type: string;
    readonly payload?: PrimitiveObject;
    readonly error?: boolean;
}

export interface OtherActions {
    type: "OTHER_ACTIONS";
}

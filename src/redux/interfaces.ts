import { Action as ReduxAction } from "redux";
import { PhotosFetchedAction, PhotosFetchStatedAction } from "@src/features/photos/action-types";

export type RootAction =
    | OtherActions
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
